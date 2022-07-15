import React, { useState } from "react";
import "../styles.css";
export default function Navbar(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
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
            <form
              className="d-flex"
              role="search"
              //   onSubmit={() => {
              //     props.onBtnClick(text);
              //     setText("");
              //   }
              // }
            >
              <input
                className="form-control me-2"
                type="search"
                aria-label="Search"
                value={text}
                onChange={handleChange}
                placeholder="Search Movie"
              />
              <button
                className="btn btn-warning"
                type="submit"
                onClick={() => {
                  props.onBtnClick(text);
                  setText("");
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
