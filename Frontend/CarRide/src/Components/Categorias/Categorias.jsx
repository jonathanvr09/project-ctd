import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Categorias.css";
import CardCategoria from "./CardCategoria";
import categoriasData from "../../json/cards.json";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(categoriasData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="categorias">
      <div className="Principal-grid">
        <div className="titulo">
          <span>
            <h2>Escoge la categoría que estás buscando</h2>
          </span>
          <Slider {...settings} className="slider-categoria">
            {categorias.map((categoria) => (
              <div key={categoria.id}>
                <CardCategoria categoria={categoria} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
