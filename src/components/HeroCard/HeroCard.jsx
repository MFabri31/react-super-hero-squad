import { Card } from "react-bootstrap";

const HeroCard = ({ member }) => {
  const { name, age, powers } = member;
  return (
    <Card style={{ width: "18rem" }} className="shadow">
      <Card.Body>
        <Card.Text className="fw-bold">
          Nombre: <span className="fw-normal">{name}</span>
        </Card.Text>
        <Card.Text className="fw-bold">
          Edad: <span className="fw-normal">{age}</span>
        </Card.Text>
        <Card.Text className="fw-bold">
          Poderes: <span className="fw-normal">{powers.join(", ")}.</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HeroCard;
