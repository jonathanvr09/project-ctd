import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Cerrar from "../Cerrar/cerrar";

function Header() {

  const {user}= useAuth ()
  return (
    <>
      <header>
        <Logo />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="mostrar-menu">
          &#8801;
        </label>
        <div className="contenedor-menu">
          <nav className="menu">
          {!user ? (
            <>
             <Link className="boton" to="/InicioSesion">
             Iniciar sesión
           </Link>
           <Link className="boton" to="/RegistroUsuario">
             Crear cuenta
           </Link>
            </>
          ): <Cerrar/>}
            <label htmlFor="check" className="esconder-menu">
              &#215;
            </label>
          </nav>
        </div>
      </header>
      <div className="static-header"></div>
    </>
  );
}

export default Header;
