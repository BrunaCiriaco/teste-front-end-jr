import "./bottom.css";

function createBottom({ url, name }) {
  return (
    <>
      <div className="bottom">
        <div className="img-bottom">
          <img className="logo" src={url} alt={name} />
        </div>
      </div>
    </>
  );
}
export default createBottom;
