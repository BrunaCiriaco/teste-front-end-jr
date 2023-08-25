import "./sobre.css";
import face from "../../img/rodape/023-facebook.svg";
import insta from "../../img/rodape/044-instagram.svg";
import youtube from "../../img/rodape/116-youtube.svg";

export default function sobre() {
  return (
    <>
      <div className="sobre-nos">
        <strong className="title-sobre">Sobre nós</strong>
        <div className="opcao-sobre">
          <p>Conheça </p>
          <p>COMO COMPRAR</p>
          <p> Indicação e Desconto</p>
        </div>
        <div className="rede-sociais">
          <img src={face} alt="facebook" />
          <img src={insta} alt="instagram" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </>
  );
}
