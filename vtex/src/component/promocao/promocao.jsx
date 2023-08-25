import React from "react";
import "./promocao.css";

export default function promo() {
  return (
    <>
      <div className="promo">
        <p className="txt-promo">Venha conhecer nossas promoções</p>
        <p className="desconto">50% Off nos produtos </p>
        <button className="btn-promo">Ver produto </button>
      </div>
    </>
  );
}
