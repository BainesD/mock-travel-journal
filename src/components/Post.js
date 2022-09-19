import React from "react";
import locationIcon from "../images/location-icon.png";

export default function Post(props) {
  return (
    <>
      <div className="post">
        <div className="post-frame"><img className="post-img" src={props.imageURL} />
        </div>
        <div className="post-body">
          <div className="post-head">
            <img className="location-icon" src={locationIcon} />
            <div className="post-location">{props.location}</div>
            <a className="maps-link" href={props.googleMaps} target="_blank">
              View on Google Maps
            </a>
          </div>
          <div className="post-info">
            <h1 className="post-title">{props.title}</h1>
            <h3 className="post-dates">
              {props.startDate} - {props.endDate}
            </h3>
            <p className="post-text">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
