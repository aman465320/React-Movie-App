import React, { useState } from "react";
import "../styles.css";
export default function SearchTab(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container-fluid main-img">
        <div className="container-fluid search-div">
          <h1 style={{ fontSize: "2.5rem" }}>Search a movie</h1>
          <form className="d-flex main-form" role="search">
            <input
              className="form-control div-inp me-2"
              type="search"
              aria-label="Search"
              value={text}
              onChange={handleChange}
              placeholder="Search"
            />
            <button
              className="btn search-btn"
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
    </>
  );
}
