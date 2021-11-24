import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { Spinner } from "react-bootstrap";
import DayCard from "../components/DayCard";
import ModalDay from "../components/ModalDay"

export default function FiveDays(props) {
  const [data, setData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const weatherFunction = async (data) => {
    setData(data["forecast"]["forecastday"]);
    //forecast.forecastday[0].date
    //return response.data["features"][0]["context"][3]["text"];
  };
  useEffect(() => {
    if (props.data != null) {
      weatherFunction(props.data);
    }
  }, [props.data]);

  const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
  };

  return (
    <main>
        {!data ? (
          <Spinner animation="border" />
        ) : (
          <div className="container-card mt-3 ms-2 me-2">
              {data.map((item) => {
                console.log(item.date)
                console.log(item.day.condition.text)
                return (<DayCard data={item} onClick={() => handleClick(item)}/>);
              })}
          </div>
        )}
        <ModalDay
        data={modalItem}
        isShow={modalShow}
        onCancel={() => setModalShow(false)}
      />
    </main>
  );
}
