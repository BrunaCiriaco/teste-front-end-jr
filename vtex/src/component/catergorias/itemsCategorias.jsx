import React from "react";
import "./categorias.css";

function ItemsCategoria({ urlIcon, txt, titleIcon, titleIconPink }) {
  return (
    <>
      <div className="card-categori">
        <div className="imagenIcon">
          <img className="icon" src={urlIcon} alt={txt} />
        </div>
        <div className="title-icon">
          <p>{titleIcon}</p>
        </div>
        <div className="title-icon">
          <p className="title-icon-pink">{titleIconPink}</p>
        </div>
      </div>
    </>
  );
}

export default ItemsCategoria;
