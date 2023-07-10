import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
import carros from "../Cards/carros.json";
import "./Resultados.css";

const Resultados = () => {
  const { categoria } = useParams();
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const filtered = carros.filter((car) => car.categoria === categoria);
    setFilteredCars(filtered);
  }, [categoria]);

  return (
    <div className="contenedor-principal">
      <div className="titulo">
        <h2>Resultados para la categoría: {categoria}</h2>
        <div />
        <div className="contenedor-grid">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {filteredCars.map((car) => (
              <Grid item key={car.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ height: "100%" }}>
                  <img
                    src={car.url}
                    alt={car.alt}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" className="no-underline">
                      {car.title}
                    </Typography>
                    {/* Resto del contenido de la card... */}
                  </CardContent>
                </Card>
                <Divider style={{ margin: "16px 0" }} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
