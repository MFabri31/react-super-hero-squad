import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroList from "../../components/HeroList";
import SquadInfo from "../../components/SquadInfo";
import { getHeroes } from "../../services/getHeroes";

const HeroesPage = () => {
  const [members, setMembers] = useState([]);
  const [squadInfo, setSquadInfo] = useState({});

  const getDataHero = async () => {
    const data = await getHeroes();

    const { homeTown, secretBase, formed, members } = data;
    const squadData = {
      homeTown,
      secretBase,
      formed,
    };
    setMembers(members);
    setSquadInfo(squadData);
  };

  useEffect(() => {
    getDataHero();
  }, []);

  return (
    <>
      <Container>
        <h1 className="display-5 text-center my-5">Super Hero Squad</h1>
        <section className="">
          <Row className="mb-5 justify-content-center">
            <Col md={9}>
              <SquadInfo squadInfo={squadInfo} />
            </Col>
          </Row>
        </section>
      </Container>

      <section className="bg-light py-5">
        <Container>
          <h3 className="text-center mb-5 lead fs-3">Miembros</h3>
          <Row className="justify-content-center">
            <HeroList members={members} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroesPage;
