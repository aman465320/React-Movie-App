import "./styles.css";

import { useState } from "react";
import axios from "axios";
import Card from "./components/Card";
// import Navbar from "./components/Navbar";
// import SearchTab from "./components/SearchTab";

export default function App() {
  const [text, setText] = useState([""]);
  // const [inp, setInp] = useState("");
  const [movie, setMovie] = useState([]);
  const [trigger, setTrigger] = useState(false);
  function handleChange(event) {
    setText(event.target.value);
  }
  function getMovie(event) {
    event.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=7d8244d5#`)
      .then((res) => {
        setMovie(res.data.Search);
        setTrigger(true);
      });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid topbar">
          <a className="navbar-brand " href="/">
            MOVIE APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                aria-label="Search"
                value={text}
                onChange={handleChange}
                placeholder="Search Movie"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <Navbar onBtnClick={getMovie(inp)} /> */}

      {trigger && (
        <div className="container my-5 d-grid">
          <div className="row ">
            {movie.map((item, index) => {
              return (
                <Card Image={item.Poster} Year={item.Year} Title={item.Title} />
              );
            })}
          </div>
        </div>
      )}
      {!trigger && (
        <div className="container-fluid main-img">
          <div className="container-fluid search-div">
            <h1 style={{ fontSize: "2.5rem" }}>Search a movie</h1>
            <form
              className="d-flex main-form"
              role="search"
              onSubmit={getMovie}
            >
              <input
                className="form-control div-inp me-2"
                type="search"
                aria-label="Search"
                value={text}
                onChange={handleChange}
                placeholder="Search"
              />
              <button className="btn search-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* {!trigger && <SearchTab onBtnClick={getMovie(inp)} />} */}
    </>
  );
}
