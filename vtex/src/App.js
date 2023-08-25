/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./component/navbar/navBar";
import Promo from "./component/promocao/promocao";
import Categoria from "./component/catergorias/categoria";
import MenuEletronico from "./component/menuEletronico/menuEletronico";
import Produtos from "./component/cardProduto/produtos";
import LayoutCard from "./component/card/card";
import LayoutProduto from "./component/layoutProduto/layoutProduto";
import Bottom from "./component/bottom/bottom";
import Rodape from "./component/rodape/rodape";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Promo />
      <Categoria />
      <MenuEletronico />
      <Produtos />
      <LayoutCard />
      <LayoutProduto />
      <Bottom />
      <Rodape />
    </div>
  );
}

export default App;
