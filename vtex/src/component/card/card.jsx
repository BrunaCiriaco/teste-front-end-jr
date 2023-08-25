import CreateCard from "./createCard";
import "./card.css";

export default function layoutCard() {
  return (
    <>
      <div className="layoutCard">
        <CreateCard
          classes="parceiros"
          title="Parceiros"
          detalhes="Lorem ipsum dolor sit amet, consectetur"
        />
        <CreateCard
          classes="parceiros"
          title="Parceiros"
          detalhes="Lorem ipsum dolor sit amet, consectetur"
        />
      </div>
    </>
  );
}
