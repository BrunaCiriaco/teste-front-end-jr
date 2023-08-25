import React from "react";
import "./topo.css";
import ShieldCheck from "../img/ShieldCheck.svg";
import Truck from "../img/Truck.svg";
import CreditCard from "../img/CreditCard.svg";

function Info() {
  return (
    <>
      <div className="retagulo248">
        <div className="txt-top">
          <img className="icon-top" src={ShieldCheck} alt="" />
          <p className="txt-cinza">
            Compra &nbsp;
            <span className="txt-rosa">100% segura</span>
          </p>
        </div>
        <div className="txt-top">
          <img className="icon-top" src={Truck} alt="" />
          <p className="txt-rosa">
            Frete grátis &nbsp;
            <span className="txt-cinza">acima de R$ 200</span>
          </p>
        </div>
        <div className="txt-top">
          <img className="icon-top" src={CreditCard} alt="Cartão de Crédito" />
          <p className="txt-rosa">
            Parcele &nbsp;
            <span className="txt-cinza">suas compras</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Info;
