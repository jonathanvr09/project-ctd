import { useState } from "react";
import Tarjeta from "./Tarjetas";
import Ordenar from "./Ordenar";
import data from "../../json/Data.json";
import "./Grid.css";

const Grid = () => {
  const carsPerPage = 8; // Número de tarjetas por página
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  // Randomize the order of the data array
  const randomizedData = Ordenar(data);

  // Calcular el índice inicial y final de las tarjetas a mostrar en la página actual
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = randomizedData.slice(indexOfFirstCar, indexOfLastCar);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="grid-container-2">
      <h2 className="titulo-h2">Conoce nuestros carros</h2>
      <p className="texto-parrafo">
        Las mejores opciones para que reserves y aproveches
      </p>

      <div className="grid-container">
        {currentCars.map((carData, index) => (
          <div className="grid-item" key={index}>
            <Tarjeta carData={carData} />
          </div>
        ))}
      </div>

      <div className="pagination">
        {randomizedData.length > carsPerPage &&
          Array.from({
            length: Math.ceil(randomizedData.length / carsPerPage),
          }).map((item, index) => (
            <button
              key={index}
              className={`pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Grid;
