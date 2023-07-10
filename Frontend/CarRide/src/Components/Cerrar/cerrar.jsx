import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";

const Cerrar = () => {
 
  const {setUser} = useAuth()

  const mostrarAlerta = () => {
    swal({
      title: "¿Está seguro?",
      text: "¿Desea cerrar la sesión?",
      icon: "warning",
      buttons: ["Cancelar", "Confirmar"],
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        redireccionarAlHome();
      }
    });
  };

  const redireccionarAlHome = () => {
    // Redireccionar al home
    setUser(null)
    localStorage.removeItem("user")
    window.location.href = "/";
  };

  return (
    <div>
      <Link to="" className="boton" onClick={mostrarAlerta}>
        Cerrar sesión
      </Link>
    </div>
  );
};

export default Cerrar;
