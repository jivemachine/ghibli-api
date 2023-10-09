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
    const [chars, setChars] = useState([]);
    const getChars = () => {
        fetch('http://api-ghibli.herokuapp.com/people')
        .then(response => response.json())
        .then(allChars => setChars(allChars))
    };

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
            <button className="btn btn-secondary m-2" onClick={getChars}>Load People</button>
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
            <div className="container">
                <section className="row justify-content-center mt-5">
                    {chars.map(char => (
                        <div className="col-md-6" key={char.id}>
                            <div className="card shadow my2" style={{ width: "18rem" }}>
                                {/* <img src={film.image} className="card-img-top" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{char.name}</h5>
                                    <p className="card-text">Age: {char.age}</p>
                                    <p className="card-text">Gender: {char.gender}</p>
                                    <p className="card-text">JSON Response: <a target="_blank" href={"http://api-ghibli.herokuapp.com/people/" + char.id}>link</a></p>
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