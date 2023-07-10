import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import {
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./RegistroUsuario.css";
import axios from "axios";

const RegistroUsuario = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Ingrese un nombre válido")
      .required("El nombre es requerido"),
    lastName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Ingrese un apellido válido")
      .required("El apellido es requerido"),
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .matches(/.+\.com$/, "Ingrese un correo electrónico con dominio .com")
      .required("El correo electrónico es requerido"),
    confirmEmail: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .oneOf(
        [Yup.ref("email"), null],
        "Los correos electrónicos deben coincidir"
      )
      .required("La confirmación de correo electrónico es requerida"),
    phone: Yup.string()
      .matches(/^\d{2}\d{10}$/, "Ingrese un número de teléfono válido")
      .required("El número de teléfono es requerido"),
    address: Yup.string().required("La dirección es requerida"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[*#&]).*$/,
        "La contraseña debe contener al menos una mayúscula, una minúscula y un carácter especial (*, # o &)"
      )
      .required("La contraseña es requerida"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("La confirmación de contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      submitForm();
    },
  });

  const handlePasswordVisibility = () => {
    formik.setValues((prevValues) => ({
      ...prevValues,
      showPassword: !prevValues.showPassword,
    }));
  };

  const submitForm = async () => {
    const data = {
      nombre: formik.values.firstName,
      apellido: formik.values.lastName,
      telefono: formik.values.phone,
      direccion: formik.values.address,
      email: formik.values.email,
      contrasenia: formik.values.password,
      tipousuario: null,
      estadousuario: null,
    };

    axios
      .post("http://localhost:8080/usuario", data, {
        headers: {
          "Access-Control-Allow-Origin": "*", // Configura el origen permitido, puede ser "*" para permitir todos los orígenes
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          swal({
            title: "Usuario creado exitosamente",
            text: "Se ha enviado un correo para activar el usuario.",
            icon: "success",
            buttons: {
              confirm: "Aceptar",
            },
          }).then(() => {
            setShowSuccessAlert(false);
          });
          setShowSuccessAlert(true);
        } else {
          throw new Error(
            "No fue posible crear el usuario. Intente más tarde."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "Error",
          text: "No fue posible crear el usuario. Intente más tarde.",
          icon: "error",
          buttons: {
            confirm: "Aceptar",
          },
        }).then(() => {
          setShowErrorAlert(false);
        });
        setShowErrorAlert(true);
      });
  };

  useEffect(() => {
    // Lógica adicional después de enviar los datos...
  }, []);

  return (
    <div className="content">
      <div className="RegistroUsuario">
        <form onSubmit={formik.handleSubmit} className="container-Usuario">
          <h1>Crear cuenta</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                name="firstName"
                label="Nombre"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                label="Apellido"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                name="address"
                label="Dirección"
                fullWidth
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                name="phone"
                label="Teléfono"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="Correo electrónico"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="confirmEmail"
                name="confirmEmail"
                label="Confirmar correo electrónico"
                fullWidth
                value={formik.values.confirmEmail}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmEmail &&
                  Boolean(formik.errors.confirmEmail)
                }
                helperText={
                  formik.touched.confirmEmail && formik.errors.confirmEmail
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password"
                name="password"
                label="Contraseña"
                fullWidth
                type={formik.values.showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility} edge="end">
                        {formik.values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirmar contraseña"
                fullWidth
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Enviar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="secondary" fullWidth>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>

        {showSuccessAlert && (
          <div className="alert success">
            <p>
              Usuario creado exitosamente. Se ha enviado un correo para activar
              el usuario.
            </p>
          </div>
        )}
        {showErrorAlert && (
          <div className="alert error">
            <p>No fue posible crear el usuario. Intente más tarde.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistroUsuario;
