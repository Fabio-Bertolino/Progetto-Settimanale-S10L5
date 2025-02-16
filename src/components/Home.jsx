import { Col, Container, Image, Row } from "react-bootstrap";
// import sunnyLogo from "../assets/sunny.svg";
import { GeoAltFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const Home = () => {
  const [todayWeatherDate, setTodayWeatherDate] = useState("");
  const [todayWeatherLocation, setTodayWeatherLocation] = useState("");
  const [todayWeatherTemp, setTodayWeatherTemp] = useState("");
  const [todayWeatherWind, setTodayWeatherWind] = useState("");
  const [todayWeatherHumidity, setTodayWeatherHumidity] = useState("");
  const [todayWeatherMin, setTodayWeatherMin] = useState("");
  const [todayWeatherMax, setTodayWeatherMax] = useState("");
  const [todayWeatherInfo, setTodayWeatherInfo] = useState("");
  const [todayWeatherIcon, setTodayWeatherIcon] = useState("");

  const fetchTodayWeather = async () => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=45.0677551&lon=7.6824892&appid=69e0207f670eb8d5ea0e59c466ae8833&units=metric"
      );
      if (resp.ok) {
        const weatherResp = await resp.json();
        console.log(weatherResp);
        setTodayWeatherDate(weatherResp.dt);
        setTodayWeatherLocation(weatherResp.name);
        setTodayWeatherTemp(weatherResp.main.temp);
        setTodayWeatherWind(weatherResp.wind.speed);
        setTodayWeatherHumidity(weatherResp.main.humidity);
        setTodayWeatherMin(weatherResp.main.temp_min);
        setTodayWeatherMax(weatherResp.main.temp_max);
        setTodayWeatherInfo(weatherResp.weather[0].description);
        setTodayWeatherIcon(weatherResp.weather[0].icon);
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodayWeather();
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
          <h2 className="text-info display-5">
            <span className="text-light">Today&#39;s report:</span> {new Date(todayWeatherDate * 1000).toLocaleString()}
          </h2>
          <hr className="text-light" />
          <p></p>

          <Container className="bg-opaque mb-2 rounded-4">
            <Row>
              <Col sm={12} md={6} className="d-flex justify-content-center align-items-center">
                {/* prendere api per capire come integrare img logo */}
                <Image
                  fluid
                  src={`https://openweathermap.org/img/wn/${todayWeatherIcon}@2x.png`}
                  width="150px"
                  wheight="150px"
                  alt="current weather icon"
                />
              </Col>
              <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                <p className="text-dark fs-3 bg-info py-2 px-5 rounded-pill mt-4">
                  <GeoAltFill /> {todayWeatherLocation}
                </p>
                <h4 className="display-5 text-white">{todayWeatherInfo}</h4>
                <p className="display-2 text-info">
                  {todayWeatherTemp}
                  <span className="text-dark">&deg;</span>
                </p>
              </Col>
            </Row>
          </Container>
          <hr className="text-light" />
          <Container className="text-light mb-4">
            <Row className="align-items-center gy-3">
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3">
                  <p className="fs-4">Wind:</p>
                  <p className="fs-3 text-info">
                    {todayWeatherWind}
                    <span className="text-dark"> m/s</span>
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3">
                  <p className="fs-4">Humidity:</p>
                  <p className="fs-3 text-info">
                    {todayWeatherHumidity}
                    <span className="text-dark">%</span>
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3">
                  <p className="text-info fs-4">Min: </p>
                  <p className="text-info fs-3">{todayWeatherMin}&deg;</p>
                  <p className="text-dark fs-4">Max: </p>
                  <p className="text-dark fs-3">{todayWeatherMax}&deg;</p>
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
