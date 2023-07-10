import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import FiltroFechas from "../FiltroFechas/FiltroFechas";
import { filtroFechasContext } from "../FiltroFechas/context";
import swal from "sweetalert";
import "./Disponibilidad.css";

const Disponibilidad = () => {
  const { rangeDate, dateRangeCapture } = useContext(filtroFechasContext);
  const [reservas, setReservas] = useState(
    JSON.parse(localStorage.getItem("reservas") ?? "[]")
  );
  const handleClick = () => {
    const newreservas = [...reservas, rangeDate];
    setReservas(newreservas);
    localStorage.setItem("reservas", JSON.stringify(newreservas));
    swal("Se creo la reserva exitosamente");
    dateRangeCapture([]);
  };

  return (
    <div className="image-block">
      <h3 className="title-disponibilidad">Disponibilidad</h3>
      <FiltroFechas
        reservaciones={reservas.map(([checkInDate, checkOutDate]) => ({
          checkInDate,
          checkOutDate,
        }))}
      />
      
    </div>
  );
};

export default Disponibilidad;
