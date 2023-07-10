import "react-datepicker/dist/react-datepicker.css";
import "./FiltroFechas.css";

import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import useWindowSize from "../../Hooks/useWindowSize";
import { filtroFechasContext } from "./context";

const FiltroFechas = (props) => {
  const { reservaciones } = props;
  const { dateRangeCapture } = useContext(filtroFechasContext);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  registerLocale("es", es);
  const { width } = useWindowSize();

  useEffect(() => {
    dateRangeCapture(dateRange);
  });

  const fechasReservadas = reservaciones?.map((reservacion) => ({
    start: new Date(reservacion.checkInDate),
    end: new Date(reservacion.checkOutDate),
  }));

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      monthsShown={width < 768 ? 1 : 2}
      dateFormat="dd/MM/yyyy"
      placeholderText="Fecha de inicio - Fecha de finalización"
      onChange={(update) => {
        setDateRange(update);
      }}
      locale="es"
      excludeDateIntervals={fechasReservadas}
    />
  );
};

FiltroFechas.propTypes = {
  reservaciones: PropTypes.arrayOf(
    PropTypes.shape({
      checkInDate: PropTypes.string,
      checkOutDate: PropTypes.string,
    })
  ),
};

export default FiltroFechas;
