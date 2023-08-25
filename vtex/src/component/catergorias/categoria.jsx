import ItemsCategoria from "./itemsCategorias";
import monitorar from "../img/categorias/monitorar-table.png";
import supermercados from "../img/categorias/supermercados1.png";
import whiskey from "../img/categorias/whiskey.png";
import ferramenta from "../img/categorias/ferramenta.png";
import cuidado from "../img/categorias/cuidados.png";
import corrida from "../img/categorias/corrida.png";
import moda from "../img/categorias/modas.png";

function Categoria() {
  return (
    <>
      <div className="list-item">
        <ItemsCategoria
          urlIcon={monitorar}
          txt="Monitorar tablet e smartohone"
          titleIconPink="Tecnologia"
        />
        <ItemsCategoria
          urlIcon={supermercados}
          txt="Supermercados "
          titleIcon="Supermercado"
        />
        <ItemsCategoria urlIcon={whiskey} txt="Bebidas" titleIcon="Bebidas" />
        <ItemsCategoria
          urlIcon={ferramenta}
          txt="Ferramentas"
          titleIcon="Ferramentas"
        />
        <ItemsCategoria
          urlIcon={cuidado}
          txt="Cuidados de saude"
          titleIcon="Saúde"
        />
        <ItemsCategoria
          urlIcon={corrida}
          txt="Esportes e Fitness"
          titleIcon="Esportes e Fitness"
        />
        <ItemsCategoria urlIcon={moda} txt="Moda" titleIcon="Moda" />
      </div>
    </>
  );
}

export default Categoria;
