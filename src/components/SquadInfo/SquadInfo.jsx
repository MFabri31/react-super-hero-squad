import { Card } from "react-bootstrap";

const SquadInfo = ({ squadInfo }) => {
  const { homeTown, secretBase, formed } = squadInfo;
  return (
    <>
      <Card className="bg-secondary text-white shadow">
        <Card.Body>
          <Card.Text>Ciudad: {homeTown} </Card.Text>
          <Card.Text>Base secreta: {secretBase}</Card.Text>
          <Card.Text>Año de formación: {formed}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SquadInfo;
