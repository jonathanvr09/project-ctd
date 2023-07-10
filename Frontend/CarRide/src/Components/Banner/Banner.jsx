import BarraBusqueda from "../SearchBox/BarraBusqueda";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url("/bg.png"), linear-gradient(#00000087, #000000ad)`,
        }}
      >
        <div className="box">
          <h2 className="title">Conoce nuestras tarifas</h2>
          <h3 className="text">
            Da el primer paso, solo es cuestión de decisión
          </h3>
          <BarraBusqueda />
        </div>
      </div>
    </>
  );
};

export default Banner;
