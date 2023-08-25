import "./cardProduto.css";
import React, { useState } from "react";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";

const ModaProduto = ({
  className,
  modalRef,
  imagem,
  name,
  detalhes,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const novaQuantidade = parseInt(event.target.value);
    setQuantity(novaQuantidade);
  };

  const mais = () => {
    setQuantity(quantity + 1);
  };

  const menos = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <div className="principal-modal">
        <div className="card-produtos">
          <img src={imagem} alt={name} />
        </div>
        <div className="dtl-produto">
          <button className="close-modal">X</button>
          <p className="nome-produto">{name}</p>
          <p className="price-produto"> R$ {price}</p>
          <p className="detalhe-produto">{detalhes}</p>
          <p className="veja-mais">Veja mais detalhes do produto </p>
          <div className="compra">
            <div className="quantity-input">
              <span className="menos" onClick={menos}>
                <img src={minus} alt="menos" />
              </span>
              <input
                className="input-compra"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <span className="mais" onClick={mais}>
                <img src={plus} alt="mais" />
              </span>
            </div>
            <button className="btn-compra">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModaProduto;
