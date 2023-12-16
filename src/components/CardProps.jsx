import React from "react";

function CardProps(props) {
  let badgeText;

  if (props.soldOut === false) {
    badgeText = "SOLD OUT";
  } else if (props.location === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="container">
      <div className=" card-img myCard " style={{ width: "14rem" }}>
        <div className="img-wrapper">
          <img
            src={`/public/images/${props.img}`}
            className="card-img img-fluid rounded  "
            alt="atlete Picture"
          />
        </div>
        {badgeText && (
          <p className=" soldout-card bg-white rounded fw-bold">{badgeText}</p>
        )}
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img src={`/public/images/${props.star}`} alt="star picture" />
            <div>
              <span>{props.stats.rating}</span>
              <span className="gray">
                (props.item.{props.stats.reviewCount}) •{" "}
              </span>
              <span className="gray"> {props.location}</span>
            </div>
          </div>
          <h2 className="fs-6 fw-light">{props.title}</h2>
          <p className="">
            <span className="fw-bold">From ${props.amount}</span> /person
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardProps;
