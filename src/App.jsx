import { useEffect, useState } from "react";

const App = () => {

    // getting all films from api
    const [films, setFilms] = useState([]);
    const getFilms = () => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(response => response.json())
            .then(allFilms => setFilms(allFilms))
    };
    // getting all characters in films from API

    return (
        <>
            {/* <div>
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
            </div> */}
            <button className="btn btn-primary m-2" onClick={getFilms}>Load Filmz</button>
            <button className="btn btn-secondary m-2" >Load People</button>
            <div className="container">
                <section className="row justify-content-center mt-5">
                    {films.map(film => (
                        <div className="col-md-6" key={film.id}>
                            <div className="card shadow my2" style={{ width: "18rem" }}>
                                <img src={film.image} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p className="card-text">{film.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

export default App;