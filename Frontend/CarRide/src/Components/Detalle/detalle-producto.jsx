import { useParams, useLocation } from "react-router-dom";
import Disponibilidad from "../Disponibilidad/Disponibilidad";
import ImageBlock from "./ImageBlock";
import product from "../../json/product.json";
import { Typography } from "@mui/material";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const DetalleProducto = () => {

  const {user}= useAuth()

  const { id } = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const producto = product.find((car) => car.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { title, images, caracteristicas } = producto;

  const handleViewMore = () => {};

  return (
    <div className="detalle-producto">
      <div className="contenedor-imagen">
        <Typography variant="h2">{title}</Typography>
        <ImageBlock
          images={images}
          onViewMore={handleViewMore}
          caracteristicas={caracteristicas}
        />
      </div>
      {user ? <Disponibilidad/> : (
              <Button variant="contained" component={Link} to="/InicioSesion">
              Hacer Reserva
            </Button>
      )}
      <Button variant="contained" component={Link} to="/">
        Volver
      </Button>
    </div>
  );
};

export default DetalleProducto;
