import React, { useState, useEffect, useRef } from "react";
import "./cardProduto.css";
import left from "../img/Vector.svg";
import rigth from "../img/Vector01.svg";
import ModalProduto from "./modaProduto";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await fetch(
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
      );

      if (response.ok) {
        const data = await response.json();
        setProdutos(data.products);
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const scrollContainerRef = useRef(null);

  const [dropdown, setDropdown] = useState("");
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  };

  const closeDropdown = (event) => {
    event.stopPropagation();
    if (modalRef.current && modalRef.current.contains(event.target)) {
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };

  return (
    <>
      <div className="list-produto">
        <button
          className="setas"
          onClick={() => {
            if (scrollContainerRef.current)
              scrollContainerRef.current.scrollLeft -= 100;
          }}
        >
          <img src={left} alt="seta para esquerda" />
        </button>
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="scroll-content">
            {produtos.map((produto, index) => (
              <div className="card-produto" key={index}>
                <img
                  className="img-produto"
                  src={produto.photo}
                  alt={produto.productName}
                />
                <div className="detalhes">
                  <p className="name-produto">{produto.productName}</p>
                  <p className="desconto-produto">R$ 30,90</p>
                  <p className="preco">R$ {produto.price}</p>
                  <p className="parcela">
                    ou 2x de R$ {produto.price / 2} sem juros
                  </p>
                  <p style={{ color: "#F71963", margin: 0 }}> Frete grátis</p>
                </div>
                <button className="btn-compra" onClick={toggleDropdown}>
                  Comprar
                </button>
                <ModalProduto
                  modalRef={modalRef}
                  className={dropdown}
                  imagem={produto.photo}
                  name={produto.productName}
                  detalhes={produto.descriptionShort}
                  price={produto.price}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="setas"
          onClick={() => {
            if (scrollContainerRef.current)
              scrollContainerRef.current.scrollLeft += 100;
          }}
        >
          <img src={rigth} alt="seta para direita" />
        </button>
      </div>
    </>
  );
};

export default Produtos;
