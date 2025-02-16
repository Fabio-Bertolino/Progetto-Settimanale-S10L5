import { Col, Container, ListGroup, Row, Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WeatherDetails = () => {
  const params = useParams();

  const [key, setKey] = useState("day1");

  const fetchDailyWeather = async () => {
    try {
      const cityResp = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          params.id +
          "&limit=5&appid=69e0207f670eb8d5ea0e59c466ae8833"
      );
      if (cityResp.ok) {
        const cityResponse = await cityResp.json();
        console.log(cityResponse[0].lat);
        const lat = JSON.stringify(cityResponse[0].lat);
        const lon = JSON.stringify(cityResponse[0].lon);

        const dailyResp = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast?lat=" +
            lat +
            "&lon=" +
            lon +
            "&appid=69e0207f670eb8d5ea0e59c466ae8833"
        );
        if (dailyResp.ok) {
          const dailyResponse = await dailyResp.json();
          console.log(dailyResponse);
        } else {
          throw new Error("Errore nella fetch dei dati");
        }
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDailyWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8}>
          <h1 className="display-3 text-white">
            Raindom<span className="text-info">App</span>
          </h1>
          <p className="text-light bg-opaque rounded-pill d-inline-block p-3">
            The only app that gets forecasts always wrong!
          </p>
          <h2 className="text-light display-5">Todays report: xx/xx/xxxx</h2>
          <hr className="text-light" />
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="day1" title="Monday">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="Tuesday" title="Tuesday">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="Wednesday" title="Wednesday">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="Thursday" title="Thursday">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherDetails;
