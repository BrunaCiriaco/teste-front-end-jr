import "./rodape.css";
import Sobre from "./sobre/sobre";
import Info from "./Info/info";
import Pagamento from "./pagamento/pagamento";
import Cadastrar from "./cadastrar/cadastra";
import group831 from "../img/rodape/Group831.svg";

export default function rodape() {
  return (
    <>
      <div className="informacao">
        <Sobre />
        <Info />
        <Pagamento />
        <div className="cadastrar">
          <Cadastrar />
        </div>
      </div>
      <div className="rodape">
        <p className="txt-rodape">
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <div className="patrocinadores">
          <img src={group831} alt="patrocinadores" />
        </div>
      </div>
    </>
  );
}
