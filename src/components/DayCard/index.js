import React from "react";
import "./index.css";
export default function index({data, onClick}) {
  return (
    <div className="card" onClick={onClick}>
      {data ? (
          
        <>
        <div className="row">
          <div className="col-6 mt-2">
        <p className="ms-2 p-card">{data.date}</p>
        <p className="ms-2 p-card">{data.day.condition.text}</p>
        </div>
        <div className="col-3">
        <figure>
            <img className="align-middle" src={data.day.condition.icon} alt="weather" />
          </figure>
          </div>
          <div className="col-3 mt-3">
            <h3 className="align-middle">{data.day.avgtemp_c}°</h3>
          </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
