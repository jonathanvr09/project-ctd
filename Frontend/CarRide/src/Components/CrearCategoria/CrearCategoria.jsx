import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, InputLabel } from "@mui/material";
import swal from "sweetalert";
import "./CrearCategoria.css";

const CrearCategoria = () => {
  const initialValues = {
    nombreCategoria: "",
    descripcionCategoria: "",
    imagen: null,
  };

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = async () => {
    try {
      const response = await axios.get("/categoria");
      setCategorias(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    nombreCategoria: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras y espacios")
      .required("Campo requerido"),
    descripcionCategoria: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras y espacios")
      .required("Campo requerido"),
    imagen: Yup.mixed().required("Campo requerido"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const nombreCategoriaExistente = categorias.find(
        (categoria) =>
          categoria.nombre.toLowerCase() ===
          values.nombreCategoria.toLowerCase()
      );

      if (nombreCategoriaExistente) {
        swal({
          title: "Error",
          text: "La categoría ya existe. Por favor, elija otro nombre.",
          icon: "error",
          button: "Aceptar",
        });
      } else {
        const formData = {
          nombre: values.nombreCategoria,
          descripcion: values.descripcionCategoria,
          url: null,
        };

        await axios.post("http://18.188.50.174:8080/categoria", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        swal({
          title: "¡Categoría creada!",
          text: "La categoría se ha creado exitosamente.",
          icon: "success",
          button: "Cerrar",
        }).then(() => {
          resetForm();
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content">
      <div className="form-categoria">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          {() => (
            <Form>
              <h1>Crear Categoria</h1>
              <div className="field-row">
                <div>
                  <InputLabel htmlFor="nombreCategoria" className="label">
                    Nombre nueva categoría
                  </InputLabel>
                  <Field
                    type="text"
                    id="nombreCategoria"
                    name="nombreCategoria"
                    className="custom-textfield"
                  />
                  <ErrorMessage
                    name="nombreCategoria"
                    component="div"
                    className="error-msg"
                  />
                </div>
                <div>
                  <InputLabel htmlFor="descripcionCategoria" className="label">
                    Descripción de nueva categoría
                  </InputLabel>
                  <Field
                    type="text"
                    id="descripcionCategoria"
                    name="descripcionCategoria"
                    className="custom-textfield"
                  />
                  <ErrorMessage
                    name="descripcionCategoria"
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
                  as="input"
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

export default CrearCategoria;
