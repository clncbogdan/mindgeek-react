import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function MovieListItem({movie}) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{movie.headline}</Card.Title>
                <Card.Text>
                    {movie.synopsis}
                </Card.Text>
                <ul className='list-unstyled'>
                    <li>Cert: {movie.cert}</li>
                    <li>Duration: {movie.duration} seconds</li>
                    <li>Rating: {movie.rating}</li>
                    <li>Year: {movie.year}</li>
                    <li>View window: {movie.vw_start_date} - {movie.vw_end_date}</li>
                    <li>Way to view: {movie.vw_wtw}</li>
                    <li>Reviews: {movie.url}</li>
                    <li>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {movie.quote}{' '}
                            </p>
                            <footer className="blockquote-footer">
                                <cite title={movie.review_author}>{movie.review_author}</cite>
                            </footer>
                        </blockquote>    
                    </li>
                </ul>
            </Card.Body>
            <Card.Footer>
                <Link className='btn btn-primary' to={`/movies/${movie.id}`}>See details</Link>
            </Card.Footer>
        </Card>
    )
}