import React from "react";
import "../styles.css";
export default function Card(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 card-div my-2">
      <div class="card my-3">
        <img
          src={props.Image}
          class="card-img-top"
          alt="https://www.bunkers-group.com/B_Lounge/image-not-found.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">{props.Year}</h5>
          <h4 className="card-text">{props.Title}</h4>
        </div>
      </div>
    </div>
  );
}
