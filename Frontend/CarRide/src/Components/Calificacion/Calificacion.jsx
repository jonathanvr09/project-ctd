import "./Calificacion.css";
import Rating from '@mui/material/Rating';

const Calificacion = ({ rating }) => {
  return (
    <div className="rating">
      <Rating name="calificacion" value={rating} readOnly />
    </div>
  );
};

export default Calificacion;


