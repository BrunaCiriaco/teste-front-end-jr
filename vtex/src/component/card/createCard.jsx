import "./card.css";

function createCard({ title, detalhes, classes }) {
  return (
    <>
      <div className={classes}>
        <div className="divCard">
          <h1 className="tilte">{title}</h1>
          <p className="txt">{detalhes}</p>
          <button className="btn-confirma">Confira</button>
        </div>
      </div>
    </>
  );
}
export default createCard;
