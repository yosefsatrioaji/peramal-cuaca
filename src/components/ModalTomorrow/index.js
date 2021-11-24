import React from "react";
import "./index.css";
import { FiWind, FiDroplet } from "react-icons/fi";
export default function index({ isShow, data, onCancel }) {
  console.log(data);
  //<img className="align-middle" src={data.condition.icon} alt="weather" />
  return (
    <div
      className={!isShow ? "hidden" : ""}
      datacy="modal-delete"
    >
      <div className="modal-bg" onClick={onCancel}></div>
      <div className="modal">
          <p className="mt-1rem">{data && data.time}</p>
        {data && <img className="align-middle" src={data.condition.icon} alt="weather" />}
        <h3>{data && data.temp_c}</h3>
        <p className="mt-1rem">
            <FiWind className="me-1" /> {data && data.wind_kph}
            <FiDroplet className="ms-2 me-1 " /> {data && data.humidity} %
          </p>
      </div>
    </div>
  );
}
