import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function MovieDetails({movie}) {

    return (
        <>
        {movie && 
            <Card>
                <Card.Body>
                    <Card.Title>{movie.headline}</Card.Title>
                    <Card.Text>
                        {movie.synopsis}
                    </Card.Text>
                    <ul className='list-unstyled'>
                        <li><strong>UUID:</strong> {movie.UUID}</li>
                        <li><strong>Cert:</strong> {movie.cert}</li>
                        <li><strong>Duration:</strong> {movie.duration} seconds</li>
                        <li><strong>Rating:</strong> {movie.rating}</li>
                        <li><strong>Year:</strong> {movie.year}</li>
                        <li><strong>View window:</strong> {movie.vw_start_date} - {movie.vw_end_date}</li>
                        <li><strong>Way to view:</strong> {movie.vw_wtw}</li>
                        <li><strong>Reviews:</strong> {movie.url}</li>
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
                        <li><strong>Cast:</strong> { movie.actors.map((actor) => actor.name).join(', ')}</li>
                        <li><strong>Director:</strong> { movie.directors.map((actor) => actor.name).join(', ')}</li>
                    </ul>
                </Card.Body>
            </Card>
        }</>
    )
}