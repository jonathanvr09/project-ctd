import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import "./CrearProducto.css";

const CrearProducto = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showDuplicateError, setShowDuplicateError] = useState(false);
  const [vehiculos, setVehiculos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const initialValues = {
    placa: "",
    marca: "",
    modelo: "",
    anio: "",
    precio: "",
    categoria: "",
    imagen: null,
  };

  const validationSchema = Yup.object().shape({
    placa: Yup.string().required("Campo requerido"),
    marca: Yup.string().required("Campo requerido"),
    modelo: Yup.string().required("Campo requerido"),
    anio: Yup.number()
      .typeError("Debe ser un número")
      .required("Campo requerido")
      .max(2023, "El año no puede ser mayor a 2023"),
    precio: Yup.number()
      .typeError("Debe ser un número")
      .required("Campo requerido"),
    categoria: Yup.string().required("Campo requerido"),
    imagen: Yup.mixed().required("Campo requerido"),
  });

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await axios.get("http://18.188.50.174:8080/vehiculo");
        setVehiculos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCategorias = async () => {
      try {
        const response = await axios.get("http://18.188.50.174:8080/categoria");
        setCategorias(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVehiculos();
    fetchCategorias();
  }, []);

  const onSubmit = async (values, { resetForm }) => {
    try {
      const isDuplicate = vehiculos.some(
        (vehiculo) => vehiculo.placa === values.placa
      );
      if (isDuplicate) {
        throw new Error("La placa ya existe");
      }

      const categoriaSeleccionada = categorias.find(
        (categoria) => categoria.nombre === values.categoria
      );
      if (!categoriaSeleccionada) {
        throw new Error("Categoría inválida");
      }

      const data = {
        placa: values.placa,
        marca: values.marca,
        modelo: values.modelo,
        anio: values.anio,
        precioDia: values.precio,
        categoria: {
          id: categoriaSeleccionada.id,
        },
        urlImagen: "BMW.PNG",
      };

      const response = await axios.post(
        "http://18.188.50.174:8080/vehiculo",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        swal({
          title: "Vehiculo creado exitosamente",
          icon: "success",
          buttons: {
            confirm: "Aceptar",
          },
        }).then(() => {
          setShowSuccessAlert(false);
          resetForm();
        });
        setShowSuccessAlert(true);
      } else {
        throw new Error("No fue posible crear el Vehiculo. Intente más tarde.");
      }
    } catch (error) {
      console.error(error);
      swal({
        title: "Error",
        text:
          error.message ||
          "No fue posible crear el Vehiculo. Intente más tarde.",
        icon: "error",
        buttons: {
          confirm: "Aceptar",
        },
      }).then(() => {
        setShowErrorAlert(false);
      });
      setShowErrorAlert(true);
    }
  };

  return (
    <div className="content">
      <div className="form-vehiculo">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <h1>Registrar Vehiculo</h1>
              <div className="field-row">
                <div>
                  <InputLabel htmlFor="placa" className="label">
                    Placa
                  </InputLabel>
                  <Field
                    as={TextField}
                    type="text"
                    id="placa"
                    name="placa"
                    className="custom-textfield"
                  />
                  <ErrorMessage
                    name="placa"
                    component="div"
                    className="error-msg"
                  />
                  {showDuplicateError && (
                    <div className="error-msg">El vehículo ya existe</div>
                  )}
                </div>
                <div>
                  <InputLabel htmlFor="marca" className="label">
                    Marca
                  </InputLabel>
                  <Field
                    as={TextField}
                    type="text"
                    id="marca"
                    name="marca"
                    className="custom-textfield"
                  />
                  <ErrorMessage
                    name="marca"
                    component="div"
                    className="error-msg"
                  />
                </div>
              </div>
              <div className="field-row">
                <div>
                  <InputLabel htmlFor="modelo" className="label">
                    Modelo
                  </InputLabel>
                  <Field
                    as={TextField}
                    type="text"
                    id="modelo"
                    name="modelo"
                    className="custom-textfield"
                  />
                  <ErrorMessage
                    name="modelo"
                    component="div"
                    className="error-msg"
                  />
                </div>
                <div>
                  <InputLabel htmlFor="anio" className="label">
                    Año
                  </InputLabel>
                  <Field
                    as={TextField}
                    type="text"
                    id="anio"
                    name="anio"
                    className="custom-textfield"
                  />
                  <ErrorMessage
                    name="anio"
                    component="div"
                    className="error-msg"
                  />
                </div>
              </div>
              <div className="field-row">
                <div>
                  <InputLabel htmlFor="precio" className="label">
                    Precio
                  </InputLabel>
                  <Field
                    as={TextField}
                    type="text"
                    id="precio"
                    name="precio"
                    className="custom-textfield"
                  />
                  <ErrorMessage
                    name="precio"
                    component="div"
                    className="error-msg"
                  />
                </div>
                <div>
                  <InputLabel htmlFor="categoria" className="label">
                    Categoría
                  </InputLabel>
                  <Field
                    as={Select}
                    id="categoria"
                    name="categoria"
                    className="custom-textfield"
                  >
                    <MenuItem value="">Seleccionar categoría</MenuItem>
                    {categorias.map((categoria) => (
                      <MenuItem value={categoria.nombre} key={categoria.id}>
                        {categoria.nombre}
                      </MenuItem>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="categoria"
                    component="div"
                    className="error-msg"
                  />
                </div>
              </div>
              <div>
                <InputLabel htmlFor="imagen" className="label">
                  Imagen
                </InputLabel>
                <Field
                  as={TextField}
                  type="file"
                  id="imagen"
                  name="imagen"
                  className="imagen-field"
                />
                <ErrorMessage
                  name="imagen"
                  component="div"
                  className="error-msg"
                />
              </div>
              <div className="button-container">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="submit-btn"
                >
                  Crear
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CrearProducto;
