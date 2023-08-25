import React, { useRef } from "react";
import Title from "../titles/title";
import CreateBottom from "./createBottom";
import vtex from "../img/Bottom/Group403.svg";
import mcCain from "../img/Bottom/mcCain.png";
import camil from "../img/Bottom/camil.png";
import doro from "../img/Bottom/doro.png";
import grano from "../img/Bottom/grano.png";
import next from "../img/next.svg";

function Bottom() {
  const scrollContainerRef = useRef(null);
  return (
    <>
      <Title title="Navegue por marcas" />
      <div className="list-bottom">
        <button
          className="setas-left"
          onClick={() => {
            if (scrollContainerRef.current)
              scrollContainerRef.current.scrollLeft -= 100;
          }}
        >
          <img className="seta-left" src={next} alt="next" />
        </button>
        <div className="scroll-bottom" ref={scrollContainerRef}>
          <div className="scroll-item">
            <CreateBottom url={vtex} alt="vtex" />
            <CreateBottom url={vtex} alt="vtex" />
            <CreateBottom url={vtex} alt="vtex" />
            <CreateBottom url={vtex} alt="vtex" />
            <CreateBottom url={vtex} alt="vtex" />
            <CreateBottom url={mcCain} alt="mcCain" />
            <CreateBottom url={camil} alt="camil" />
            <CreateBottom url={doro} alt="A d'oro" />
            <CreateBottom url={grano} alt="grano" />
          </div>
        </div>
        <button
          className="setas"
          onClick={() => {
            if (scrollContainerRef.current)
              scrollContainerRef.current.scrollLeft += 100;
          }}
        >
          <img src={next} alt="next" />
        </button>
      </div>
    </>
  );
}

export default Bottom;
