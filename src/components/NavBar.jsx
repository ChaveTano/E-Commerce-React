import CartWidget from "./CartWidget";
import "../styles.css"

const NavBar = () => {
  return (
    <div className="contenedorNavBar">
      <ul className="navBar">
        <a className="entrenamientoFuncional" href="">Funcional</a>
        <a className="futbol" href="">Fútbol</a>
        <a className="boxeo" href="">Boxeo</a>
        <a className="crossfit" href="">CrossFit</a>
        <a className="cognitivo" href="">Cognitivo</a>
        </ul>
      <CartWidget className="cartWidget"/>
    </div>
  );
};

export default NavBar;
