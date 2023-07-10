import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Link, Typography } from "@mui/material";
import "./Login.css";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
    const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo inválido").required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user, setUser}= useAuth()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://18.188.50.174:8080/usuario");
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  const onSubmit = (values) => {
    const user = users.find(
      (user) =>
        user.email === values.email && user.contrasenia === values.password
    );
      if (!user){
        setError("Correo o contraseña incorrectos");
        return;
      }
      setUser(user)
      localStorage.setItem("user",JSON.stringify(user))

    console.log("Datos ingresados por el usuario:", values);
    console.log("Usuarios obtenidos del endpoint:", user);

    if (user.tipousuario.id === 1) {
        navigate("/panel"); // Redirige al panel si el tipo de usuario es 1
      } else if (user.tipousuario.id === 2) {
        navigate("/"); // Redirige a la página de reserva si el tipo de usuario es 2
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <Typography variant="h4" className="login-form-title">
        Iniciar sesión
      </Typography>
      <TextField
        id="email"
        name="email"
        label="Correo"
        variant="outlined"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="password"
        name="password"
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type="submit" variant="contained" color="primary">
        Ingresar
      </Button>
      <div className="register-link">
        <Link
          component={RouterLink}
          to="/RegistroUsuario"
          color="textSecondary"
        >
          ¿Aún no tienes cuenta? Regístrate
        </Link>
      </div>
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      {user && (
        <Typography variant="body2">
          {setTimeout(() => {
            window.location.href = "/panel";
          }, 1000)}
        </Typography>
      )}
    </form>
  );
};

export default Login;
