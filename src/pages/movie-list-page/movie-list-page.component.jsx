import React, {useEffect, useState} from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import MovieList from '../../components/movie-list/movie-list.component';

export default function MovieListPage() {
    const [movieList, setMovieList] = useState([]);
    const [displayMovieList, setDisplayMovieList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost/api/movies', { method: "GET" })
            .then(res => res.json())
            .then(jsonRes => {
                setMovieList(jsonRes);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        setDisplayMovieList(movieList.slice(0, (currentIndex < movieList.length ? currentIndex : movieList.length)));
    }, [movieList, currentIndex]);
    
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} >
            <Container>
                {!isLoading ? 
                <>
                    <MovieList displayMovieList={displayMovieList} />
                    <Row>
                        <Col><Button variant="primary" onClick={() => setCurrentIndex(currentIndex+10)}>Load more</Button></Col>
                    </Row>
                </> : 
                <Row>
                    <Col>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>}
            </Container>
        </ThemeProvider>
    )
}