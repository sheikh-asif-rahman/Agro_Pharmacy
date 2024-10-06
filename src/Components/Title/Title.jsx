import React from "react";
import "./Title.css";

const Title = ({ subtitle, title, ID }) => {
  return (
    <div id= {ID} className="title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
