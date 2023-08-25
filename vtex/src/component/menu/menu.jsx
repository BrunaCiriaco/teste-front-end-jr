import Crown from "../img/CrownSimple.svg";
import "./menu.css";

export default function menu() {
  return (
    <>
      <div className="menu">
        <p className="txt-menu">Todas Categorias</p>
        <p className="txt-menu">Supermercado</p>
        <p className="txt-menu">Livros</p>
        <p className="txt-menu">Moda</p>
        <p className="txt-menu">Lançamentos</p>
        <p className="txt-menu-oferta">Ofertas do dia</p>
        <p className="txt-menu">
          <span className="crown">
            <img src={Crown} alt="Coroa cinza" />
          </span>
          Assinatura{" "}
        </p>
      </div>
    </>
  );
}
