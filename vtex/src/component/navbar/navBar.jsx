import React from "react";
import "./navbar.css";
import Logo from "../img/cabecalho/logo.svg";
import Group from "../img/cabecalho/Group.svg";
import Heart from "../img/cabecalho/Heart.svg";
import UserCircle from "../img/cabecalho/UserCircle.svg";
import ShoppingCart from "../img/cabecalho/ShoppingCart.svg";
import Menu from "../menu/menu";
import Info from "../info/Rectangle248";

function Navbar() {
  return (
    <>
      <Info />
      <div className="cabecalho">
        <div className="retagulo249">
          <img className="logo" src={Logo} alt="Logo Vtex" />
          <form className="search01" action="#" method="GET">
            <input
              className="search"
              type="text"
              placeholder="O que você está buscando?"
              required
            />
          </form>
          <div className="icon-option">
            <img className="icons-navbar" src={Group} alt="Caixa" />
            <img className="icons-navbar" src={Heart} alt="Coração" />
            <img className="icons-navbar" src={UserCircle} alt="Usuario" />
            <img className="icons-navbar" src={ShoppingCart} alt="Carrinho" />
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default Navbar;
