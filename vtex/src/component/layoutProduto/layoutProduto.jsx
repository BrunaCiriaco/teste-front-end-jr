import "./layout.css";
import Title from "../titles/title";
import CreateCard from "../card/createCard";

function layoutProduto() {
  return (
    <>
      <div className="top">
        <Title title="Produtos relacionados" />
        <p className="txt-veja">Veja Mais</p>
      </div>
      <div className="layoutProduto">
        <CreateCard
          classes="produtos"
          title="Produtos"
          detalhes="Lorem ipsum dolor sit amet, consectetur"
        />
        <CreateCard
          classes="produtos"
          title="Produtos"
          detalhes="Lorem ipsum dolor sit amet, consectetur"
        />
      </div>
    </>
  );
}
export default layoutProduto;
