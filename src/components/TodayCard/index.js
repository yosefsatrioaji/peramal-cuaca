import React from "react";
import "./index.css";
export default function index({data, onClick}) {
    const clock = data.time.split(" ")[1]
  return (
    <div className="card" onClick={onClick}>
      {data ? (
          
        <>
        <p className="p-min">{clock}</p>
        <figure>
            <img src={data.condition.icon} alt={data.l} />
          </figure>
          
          <div className="card-info">
            <h3>{data.temp_c}°</h3>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
