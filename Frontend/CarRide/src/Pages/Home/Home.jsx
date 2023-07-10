import Categorias from "../../Components/Categorias/Categorias";
import Banner from "../../Components/Banner/Banner";
import Galeria from "../../Components/Tarjetas/Grid";

function Home() {
  return (
    <div>
      <Banner />
      <Categorias />
      <Galeria />
    </div>
  );
}

export default Home;
