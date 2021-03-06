import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
  <div className="card col-md-3" onClick={() => props.setClicked(props.id)}>
    <div className="img-container text-center">
      <img className="img img-thumbnail" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MemoryCard;
