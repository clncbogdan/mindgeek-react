import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MovieDetails from '../../components/movie-details/movie-details.component';

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost/api/movies/${id}`, { method: "GET" })
            .then(res => res.json())
            .then(jsonRes => {
                setMovie(jsonRes);
            });
    }, [id]);

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} >
            <Container>
                <Row>
                    <Col>
                        <Link to={'/'} className={'btn btn-primary mb-4 mt-5'}>Back to the list</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MovieDetails movie={movie} />
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    )
}