import Banner from "../../Components/Banner/Banner";
import Categorias from "../../Components/Categorias/Categorias";
import Galeria from "../../Components/Tarjetas/Grid";
import Disponibilidad from "../../Components/Reserva/Disponibilidad";
import Logo from "../../Components/Logo/Logo";
import Cerrar from "../../Components/Cerrar/cerrar";
import BotonReserva from "../../Components/BotonReserva/BotonReserva"
import { useState } from "react";


const CrearReserva = () => {

  const [showHeaderButtons, setShowHeaderButtons] = useState(false); // Estado para controlar la visibilidad de los botones del encabezado

  // Función para mostrar los botones del encabezado cuando se abandona la página `CrearReserva`
  const handleLeaveReserva = () => {
    setShowHeaderButtons(true);
  };

  // Función para ocultar los botones del encabezado cuando se ingresa a la página `CrearReserva`
  const handleEnterReserva = () => {
    setShowHeaderButtons(false);
  };
  
  return (
    <div>
      {" "}
      <div>
        <Banner />
        <Disponibilidad />
        <Categorias />
        <Galeria />
      </div>
      <header className={`header ${showHeaderButtons ? "active" : ""}`}>
        <Logo />
        <Cerrar />
        <BotonReserva/>
      </header>
      {/* Añadir eventos de entrada y salida del Panel */}
      <div onMouseEnter={handleEnterReserva} onMouseLeave={handleLeaveReserva} />
    </div>
  );
};

export default CrearReserva;