import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MovieListItem from '../movie-list-item/movie-list-item.component';

export default function MovieList({displayMovieList}) {

    return (
        <Row xs={1} md={2} className="g-4">
            {displayMovieList.map((movie) => (
                <Col>
                    <MovieListItem movie={movie} key={movie.uuid}/>
                </Col>
            ))}
        </Row>
    )
}

