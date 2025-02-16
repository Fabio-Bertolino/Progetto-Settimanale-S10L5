import { Col, Container, Image, Row, Form } from "react-bootstrap";
// import sunnyLogo from "../assets/sunny.svg";
import { Droplet, GeoAltFill, ThermometerSnow, ThermometerSun, Wind } from "react-bootstrap-icons";
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
  const [city, setCity] = useState("Rome");

  const fetchTodayWeather = async () => {
    try {
      const cityResp = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=69e0207f670eb8d5ea0e59c466ae8833"
      );
      if (cityResp.ok) {
        const cityResponse = await cityResp.json();
        console.log(cityResponse[0].lat);
        const lat = JSON.stringify(cityResponse[0].lat);
        const lon = JSON.stringify(cityResponse[0].lon);

        const resp = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            lon +
            "&appid=69e0207f670eb8d5ea0e59c466ae8833&units=metric"
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
  }, [city]);

  return (
    <Container>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8}>
          <h1 className="display-3 text-white">
            Raindom<span className="text-info">App</span>
          </h1>
          <p className="text-light bg-opaque rounded-pill d-inline-block p-3">
            The only app that gets forecasts always right!
          </p>
          <p className="text-light fw-bold">Select a city! &#128071;</p>
          <Form.Select
            aria-label="Default select example"
            className="bg-purple rounded-pill text-center text-light fs-3 my-4"
            onChange={(e) => {
              switch (e.target.value) {
                case "Rome":
                  setCity("Rome");
                  break;
                case "Aquila":
                  setCity("Aquila");
                  break;
                case "Potenza":
                  setCity("Potenza");
                  break;
                case "Catanzaro":
                  setCity("Catanzaro");
                  break;
                case "Naples":
                  setCity("Naples");
                  break;
                case "Bologna":
                  setCity("Bologna");
                  break;
                case "Trieste":
                  setCity("Trieste");
                  break;
                case "Genoa":
                  setCity("Genoa");
                  break;
                case "Milan":
                  setCity("Milan");
                  break;
                case "Ancona":
                  setCity("Ancona");
                  break;
                case "Campobasso":
                  setCity("Campobasso");
                  break;
                case "Turin":
                  setCity("Turin");
                  break;
                case "Bari":
                  setCity("Bari");
                  break;
                case "Cagliari":
                  setCity("Cagliari");
                  break;
                case "Palermo":
                  setCity("Palermo");
                  break;
                case "Florence":
                  setCity("Florence");
                  break;
                case "Trento":
                  setCity("Trento");
                  break;
                case "Perugia":
                  setCity("Perugia");
                  break;
                case "Aosta":
                  setCity("Aosta");
                  break;
                case "Venice":
                  setCity("Venice");
                  break;
              }
            }}
          >
            <option className="bg-opaque">Rome</option>
            <option className="bg-opaque">Aquila</option>
            <option className="bg-opaque">Potenza</option>
            <option className="bg-opaque">Catanzaro</option>
            <option className="bg-opaque">Naples</option>
            <option className="bg-opaque">Bologna</option>
            <option className="bg-opaque">Trieste</option>
            <option className="bg-opaque">Genoa</option>
            <option className="bg-opaque">Milan</option>
            <option className="bg-opaque">Ancona</option>
            <option className="bg-opaque">Campobasso</option>
            <option className="bg-opaque">Turin</option>
            <option className="bg-opaque">Bari</option>
            <option className="bg-opaque">Cagliari</option>
            <option className="bg-opaque">Palermo</option>
            <option className="bg-opaque">Florence</option>
            <option className="bg-opaque">Trento</option>
            <option className="bg-opaque">Perugia</option>
            <option className="bg-opaque">Aosta</option>
            <option className="bg-opaque">Venice</option>
          </Form.Select>
          <h2 className="text-info display-5 fw-semibold">
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
                  <Wind className="fs-3" />
                  <p className="fs-3 text-info">
                    {todayWeatherWind}
                    <span className="text-dark"> m/s</span>
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3">
                  <p className="fs-4">Humidity:</p>
                  <Droplet className="fs-3" />
                  <p className="fs-3 text-info">
                    {todayWeatherHumidity}
                    <span className="text-dark">%</span>
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="bg-opaque rounded-4 p-3">
                  <p className="text-light fs-4">
                    <ThermometerSnow /> Min:{" "}
                  </p>
                  <p className="text-info fs-3">{todayWeatherMin}&deg;</p>
                  <p className="text-light fs-4">
                    <ThermometerSun /> Max:{" "}
                  </p>
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
