import { Col, Container, Image, Row } from "react-bootstrap";
import sunnyLogo from "../assets/sunny.svg";
import { GeoAltFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const Home = () => {
  const [todayWeather, setTodayWeather] = useState({});

  const fetchTodayWeather = async () => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=45.0677551&lon=7.6824892&appid=69e0207f670eb8d5ea0e59c466ae8833"
      );
      if (resp.ok) {
        const weatherResp = await resp.json();
        console.log(weatherResp);
        setTodayWeather(weatherResp);
        console.log(todayWeather);
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodayWeather();
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
          <h2 className="text-light display-5">Todays report: {new Date(todayWeather.dt).toLocaleString()}</h2>
          <hr className="text-light" />
          <p></p>

          <Container className="bg-opaque mb-2 rounded-4">
            <Row>
              <Col sm={12} md={6}>
                <Image fluid src={sunnyLogo} className="logo" alt="sunny" />
              </Col>
              <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                <p className="text-dark fs-3 bg-info py-2 px-5 rounded-pill">
                  <GeoAltFill /> {todayWeather.name}
                </p>
                <h4 className="display-4 text-white">{console.log(todayWeather)}</h4>
                <p className="display-2 text-info">
                  {todayWeather.main.temp}
                  <span className="text-dark">&deg;</span>
                </p>
              </Col>
            </Row>
          </Container>
          <hr className="text-light" />
          <Container className="text-light mb-4">
            <Row className="align-items-center g-3">
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3 m-3">
                  <p>Wind:</p>
                  <p className="display-5 text-info">{todayWeather.wind.speed}</p>
                  <p className="text-dark">m/s</p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3 m-3">
                  <p>Humidity:</p>
                  <p className="display-5 text-info">
                    {todayWeather.main.humidity}
                    <span className="text-dark">%</span>
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3 m-3">
                  <p className="text-info">Min:</p>
                  <p className="text-dark">Max:</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
