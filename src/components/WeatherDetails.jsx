import { Col, Container, ListGroup, ListGroupItem, Row, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThermometerHalf, ThermometerSnow, ThermometerSun } from "react-bootstrap-icons";

const WeatherDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [currentCity, setCurrentCity] = useState([]);
  const [fiveDayForecast, setFiveDayForecast] = useState([]);

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
            "&appid=69e0207f670eb8d5ea0e59c466ae8833&units=metric"
        );
        if (dailyResp.ok) {
          const dailyResponse = await dailyResp.json();
          console.log(dailyResponse.list);
          setFiveDayForecast(dailyResponse.list.filter((_, index) => index % 8 === 0));
          setCurrentCity(dailyResponse.city.name);
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log(error);
      navigate("/404");
    }
  };

  useEffect(() => {
    fetchDailyWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fiveDayForecast]);

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
          <h2 className="text-light display-5 fw-semibold">
            Five days Forecast: <span className="text-info">{currentCity}</span>
          </h2>
          <hr className="text-light" />
          <ListGroup className="mb-5">
            {fiveDayForecast.map((forecast) => {
              return (
                <ListGroupItem key={forecast.dt} className="bg-purple text-light p-0 m-1 rounded">
                  <Row>
                    <Col sm={12} md={4} className="d-flex flex-column justify-content-center">
                      <p className="fw-bold">{forecast.dt_txt}</p>
                      <p className="fs-4">
                        <ThermometerHalf className="text-dark" />
                        {forecast.main.temp}&deg;
                      </p>
                    </Col>
                    <Col sm={12} md={4} className="d-flex justify-content-center align-items-center">
                      <Image
                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                        alt={`https://openweathermap.org/img/wn/${forecast.weather[0].description}@2x.png`}
                        width="50px"
                        height="50px"
                      />
                    </Col>
                    <Col sm={12} md={4} className="d-flex flex-column justify-content-center">
                      <p>
                        <ThermometerSnow /> Min: {forecast.main.temp_min}&deg;
                      </p>
                      <p>
                        <ThermometerSun /> Max: {forecast.main.temp_max}&deg;
                      </p>
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherDetails;
