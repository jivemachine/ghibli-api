import { useEffect, useState } from "react";

const App = () => {

    // getting all films from api
    const [films, setFilms] = useState([]);

    // useEffect(() => {
    //     fetch('http://api-ghibli.herokuapp.com/films')
    //         .then(response => response.json())
    //         .then(allFilms => setFilms(allFilms))
    // }, []);

    const getData = () => {
        fetch('http://api-ghibli.herokuapp.com/films')
                .then(response => response.json())
                .then(allFilms => setFilms(allFilms))
    };

    return (
        <>
            <div>
                <h1>lmao hi</h1>
                <button className="btn btn-primary" onClick={getData}>Load Films</button>
                {films.map(film => (
                    <p>{film.title}</p>
                ))}
            </div>
        </>
    );
}

export default App;