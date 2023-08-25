import "./cadastrar.css";

function cadastrar() {
  return (
    <>
      <div className="cadastrar-principal">
        <div className="txt-top-card">
          <p className="cadastro">Cadastre-se e Receba nossas</p>
          <strong className="novidade"> novidades e promoções</strong>
        </div>
        <p className="txt-loren">
          Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
          lorem ipsum
        </p>
        <div className="email">
          <input
            type="email"
            defaultValue="Seu e-mail"
            className="input-email"
          />
          <input type="submit" value="OK" className="btn-ok" />
        </div>
      </div>
    </>
  );
}
export default cadastrar;
