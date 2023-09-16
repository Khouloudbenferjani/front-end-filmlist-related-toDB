import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MoviesApi } from "../Data/MovieApi";
import MovieCard from "./MoviaCard";



function MovieList() {
  const [Movies, setMovies] = useState(MoviesApi);

  return (
    <div>
      <Container>
        <Row>
          {Movies.map((movie, index) => (
            <Col>
              <MovieCard
                key={index}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                imgUrl={movie.imgUrl}
                category={movie.category}
                trailer={movie.videoUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList;