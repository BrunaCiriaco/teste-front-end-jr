import "./pagamento.css";
import cards from "../../img/rodape/formas_pagamento.svg";

function pagemento() {
  return (
    <>
      <div className="pagamento">
        <strong className="title-pagamento">FORMAS DE PAGAMENTO</strong>
        <div>
          <img src={cards} alt="tipos de cartoes" />
        </div>
      </div>
    </>
  );
}

export default pagemento;
