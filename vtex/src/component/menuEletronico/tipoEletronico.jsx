import React from "react";
import "./menuEletronicos.css";

function tiposEletrico() {
  return (
    <>
      <div className="tipos">
        <p
          className="txt-tipos"
          style={{ color: "var(--rosa-primario, #F71963)" }}
        >
          celular
        </p>
        <p className="txt-tipos">acessórios</p>
        <p className="txt-tipos">tablets</p>
        <p className="txt-tipos">notebooks</p>
        <p className="txt-tipos">TVs</p>
        <p className="txt-tipos">Ver todos</p>
      </div>
    </>
  );
}

export default tiposEletrico;
