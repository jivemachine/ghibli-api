import { useEffect, useState } from "react";

const App = () => {

    // getting all films from api
    const [films, setFilms] = useState([]);
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
                    <div className="card " style={{ width: "18rem" }}>
                        <img src={film.image} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{film.title}</h5>
                            <p className="card-text">{film.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;