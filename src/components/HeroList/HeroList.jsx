import { Col } from "react-bootstrap";
import HeroCard from "../HeroCard";

const HeroList = ({ members }) => {
  const herosList = members.map((member, index) => {
    return (
      <Col key={index} md={3}>
        <HeroCard member={member} />
      </Col>
    );
  });

  return <>{herosList}</>;
};

export default HeroList;
