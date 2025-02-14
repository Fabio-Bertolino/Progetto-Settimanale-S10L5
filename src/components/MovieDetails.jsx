import { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.id);

  const [movie, setMovie] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasError, setHasError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const fetchMovie = async () => {
    //   setIsLoading(true);
    try {
      console.log("fetching data...");
      const resp = await fetch("http://www.omdbapi.com/?apikey=a56825d6&i=" + params.id);
      if (resp.ok) {
        const moviesObj = await resp.json();
        console.log(moviesObj);
        setMovie(moviesObj);
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log(error);
      // setHasError(true);
      // setErrorMessage(error.message);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="pb-3">
      <h1 className="text-light pb-5 text-center display-5">{movie.Title}</h1>
      <Row>
        <Col md={5}>
          <Image src={movie.Poster} alt={movie.Title} />
        </Col>
        <Col md={7}>
          <h6 className="text-light">Genre</h6>
          <p className="text-secondary">{movie.Genre}</p>
          <h6 className="text-light">Runtime</h6>
          <p className="text-secondary">{movie.Runtime}</p>
          <h6 className="text-light">Plot</h6>
          <p className="text-secondary">{movie.Plot}</p>
          <h5 className="text-danger">Reviews</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
