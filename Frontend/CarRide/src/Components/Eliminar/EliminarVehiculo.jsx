import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import "./EliminarVehiculo.css";

const validationSchema = Yup.object().shape({
  placa: Yup.string().required("Campo requerido"),
});

const EliminarVehiculo = () => {
  const [vehiculoEncontrado, setVehiculoEncontrado] = useState(null);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.get(`http://18.188.50.174:8080/vehiculo`);
      console.log("Resultado de la consulta:", response.data);

      if (response.status === 200) {
        const vehiculos = response.data;
        const placaIngresada = values.placa.toUpperCase();

        const vehiculoEncontrado = vehiculos.find(
          (vehiculo) => vehiculo.placa.toUpperCase() === placaIngresada
        );

        if (vehiculoEncontrado) {
          setVehiculoEncontrado(vehiculoEncontrado);
          swal({
            title: "Vehículo encontrado",
            text: "Se ha encontrado el vehículo",
            icon: "success",
            button: "Aceptar",
          });
        } else {
          swal({
            title: "Placa no encontrada",
            text: "No se encontró ningún vehículo con la placa ingresada",
            icon: "warning",
            button: "Aceptar",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (resetForm) => {
    try {
      if (!vehiculoEncontrado) {
        return;
      }

      swal({
        title: "¿Está seguro?",
        text: "Esta acción eliminará el vehículo. ¿Desea continuar?",
        icon: "warning",
        buttons: ["Cancelar", "Confirmar"], // Botones de la alerta
        dangerMode: true,
      }).then(async (confirmed) => {
        if (confirmed) {
          const response = await axios.delete(
            `http://18.188.50.174:8080/vehiculo/${vehiculoEncontrado.placa}`
          );

          if (response.status === 200 && response.data === true) {
            swal({
              title: "Vehículo eliminado",
              text: "El vehículo ha sido eliminado",
              icon: "success",
              button: "Aceptar",
            }).then(() => {
              setVehiculoEncontrado(null);
              resetForm();
            });
          } else {
            swal({
              title: "Error al eliminar",
              text: "No se pudo eliminar el vehículo",
              icon: "error",
              button: "Aceptar",
            });
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content">
      <div className="form-container">
        <h2>Eliminar Vehículo</h2>
        <Formik
          initialValues={{ placa: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="placa">Placa:</label>
                <Field
                  type="text"
                  id="placa"
                  name="placa"
                  placeholder="Ingrese la placa"
                  initialValue="asdsa"
                />
                <ErrorMessage name="placa" component="div" className="error" />
              </div>
              <div className="botones">
                <button type="submit">Consultar</button>
                <button type="button" onClick={() => handleDelete(resetForm)}>
                  Eliminar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EliminarVehiculo;
