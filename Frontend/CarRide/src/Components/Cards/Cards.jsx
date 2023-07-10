import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import carros from "../../json/carros.json";
import "./Cards.css";
import Ordenar from "./Ordenar";
import { Link } from "react-router-dom";

const Cards = () => {
  const [carData, setCarData] = useState(carros);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 320 && window.innerWidth <= 768
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(8);

  useEffect(() => {
    // Organiza aleatoriamente el array de carros por ID
    const OrdenarCarData = Ordenar(carros);
    setCarData(OrdenarCarData);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 340 && window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Obtiene los índices de los carros que se mostrarán en la página actual
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carData.slice(indexOfFirstCar, indexOfLastCar);

  // Cambia la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="contenedor-cards">
      <span className="titulo-Cards">
        <h2>Recomendados</h2>
      </span>
      {isMobile ? (
        <Slider {...settings}>
          {currentCars.map((car) => (
            <Card key={car.id} className="card-contenido">
              <CardActionArea sx={{ backgroundColor: "lightgray" }}>
                <CardMedia
                  component="img"
                  height="300"
                  width="100%"
                  image={car.url}
                  alt={car.alt}
                  sx={{ borderRadius: "1px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "blue" }}
                  >
                    {car.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    {car.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Link to={`/detalle-producto/${car.id}`}>
                  <Button size="small" color="primary">
                    Ver detalle
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Slider>
      ) : (
        <Grid
          container
          justifyContent="center"
          sx={{ flexGrow: 1, marginTop: 5 }}
        >
          {currentCars.map((car) => (
            <Grid key={car.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                className="card-contenido"
                sx={{
                  maxWidth: 345,
                  boxShadow: 5,
                  margin: 2,
                }}
              >
                <CardActionArea sx={{ backgroundColor: "lightgray" }}>
                  <CardMedia
                    component="img"
                    height="300"
                    width="100%"
                    image={car.url}
                    alt={car.alt}
                    sx={{ borderRadius: "1px" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "blue" }}
                    >
                      {car.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: "italic" }}
                    >
                      {car.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Link to={`/detalle-producto/${car.id}`}>
                    <Button size="small" color="primary">
                      Ver detalle
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <div className="pagination">
        {carData.length > carsPerPage &&
          Array.from({ length: Math.ceil(carData.length / carsPerPage) }).map(
            (item, index) => (
              <button
                key={index}
                className={`pagination-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
      </div>
    </div>
  );
};

export default Cards;
