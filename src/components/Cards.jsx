import React from "react";
import CardProps from "./CardProps";
import data from "../data";

function Cards() {
  const DataElement = data.map((item) => {
    return <CardProps key={item.id} {...item} />;
  });

  return (
    <div
      className="d-flex container mt-5  mx-auto"
      style={{ padding: "10px 100px" }}
    >
      {DataElement}
    </div>
  );
}

export default Cards;
