import "./card-list.css";
import Card from "../card/card";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster}  key={monster.id}/>
    ))}
  </div>
);

export default CardList;
