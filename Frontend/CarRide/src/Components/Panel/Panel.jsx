import { useState } from "react";
import { Link } from "react-router-dom";
import "./Panel.css";
import CrearProducto from "../CrearProducto/CrearProducto";
import RegistroUsuario from "../RegistroUsuario/RegistroUsuario";
import EliminarVehiculo from "../Eliminar/EliminarVehiculo";
import CrearCategoria from "../CrearCategoria/CrearCategoria";
import Logo from "../Logo/Logo";
import Cerrar from "../Cerrar/cerrar";
import AsignarRoles from "../AsignarRoles/AsignarRoles";

const Panel = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHeaderButtons, setShowHeaderButtons] = useState(false); // Estado para controlar la visibilidad de los botones del encabezado

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Función para mostrar los botones del encabezado cuando se abandona la página `Panel`
  const handleLeavePanel = () => {
    setShowHeaderButtons(true);
  };

  // Función para ocultar los botones del encabezado cuando se ingresa a la página `Panel`
  const handleEnterPanel = () => {
    setShowHeaderButtons(false);
  };

  return (
    <div className="panel-container">
      <div className="panel-caja">
        <aside className="panel-permiso">
          <ul className="lista">
            <li onClick={() => handleOptionClick("CrearProducto")}>
              Crear Vehiculo
            </li>
            <li onClick={() => handleOptionClick("CrearCategoria")}>
              Crear Categoria
            </li>
            <li onClick={() => handleOptionClick("RegistroUsuario")}>
              Crear Usuario
            </li>
            <li onClick={() => handleOptionClick("EliminarVehiculo")}>
              Eliminar Vehiculo
            </li>
            <li onClick={() => handleOptionClick("AsignarRoles")}>
              AsignarRoles
            </li>
          </ul>
        </aside>

        {selectedOption === "CrearProducto" && <CrearProducto />}
        {selectedOption === "CrearCategoria" && <CrearCategoria />}
        {selectedOption === "RegistroUsuario" && <RegistroUsuario />}
        {selectedOption === "EliminarVehiculo" && <EliminarVehiculo />}
        {selectedOption === "AsignarRoles" && <AsignarRoles />}
      </div>

      <header className={`header ${showHeaderButtons ? "active" : ""}`}>
        <Logo />
        <Cerrar />
      </header>

      {/* Añadir eventos de entrada y salida del Panel */}
      <div onMouseEnter={handleEnterPanel} onMouseLeave={handleLeavePanel} />
    </div>
  );
};

export default Panel;
