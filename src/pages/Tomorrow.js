import React, { useState, useEffect } from "react";
import { FiWind, FiDroplet } from "react-icons/fi";
import "./LandingPage.css";
import { Spinner } from "react-bootstrap";
import TodayCard from "../components/TodayCard";
import Carousel from "react-elastic-carousel";
import ModalTomorrow from "../components/ModalTomorrow";

export default function Tomorrow(props) {
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(null);
  const [code, setCode] = useState(null);
  const [image, setImage] = useState(null);
  const [time, setTime] = useState(null);
  const [wind, setWind] = useState(null);
  const [humid, setHumid] = useState(null);
  const [data, setData] = useState(null);
  const [date,setDate] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const weatherFunction = async (data) => {
      //["forecast"]["forecastday"][1]
      console.log(data["forecast"]["forecastday"][1]["day"])
    setWeather(data["forecast"]["forecastday"][1]["day"]["condition"]["text"]);
    setTemp(data["forecast"]["forecastday"][1]["day"]["avgtemp_c"]);
    setCode(data["forecast"]["forecastday"][1]["day"]["condition"]["code"]);
    setTime(data["location"]["localtime"]);
    setWind(data["current"]["wind_kph"]);
    setHumid(data["current"]["humidity"]);
    setData(data["forecast"]["forecastday"][1]["hour"]);
    setDate(data["forecast"]["forecastday"][1]["date"])
    //forecast.forecastday[0].date
    //return response.data["features"][0]["context"][3]["text"];
  };
  useEffect(() => {
    if (props.data != null) {
      weatherFunction(props.data);
    }
  }, [props.data]);

  useEffect(() => {
    styleFunction(code);
  }, [time]);

  const styleFunction = async (code) => {
    if (time != null) {
      const clock = time.split(" ")[1];
      const hour = Number(clock.split(":")[0]);
      console.log(hour);
      console.log(6 < hour && hour < 17);
      if (6 < hour && hour < 17) {
        if (code === 1000) {
          setImage("sun/26");
        } else if (code === 1003) {
          setImage("sun/27");
        } else if (code === 1006) {
          setImage("cloud/35");
        } else if (code === 1009) {
          setImage("cloud/35");
        } else if (code === 1030) {
          setImage("cloud/35");
        } else if (code === 1063) {
          setImage("sun/8");
        } else if (code === 1066) {
          setImage("sun/8");
        } else if (code === 1069) {
          setImage("sun/8");
        } else if (code === 1072) {
          setImage("sun/8");
        } else if (code === 1087) {
          setImage("cloud/12");
        } else if (code === 1114) {
          setImage("cloud/23");
        } else if (code === 1117) {
          setImage("cloud/18");
        } else if (code === 1135) {
          setImage("cloud/35");
        } else if (code === 1147) {
          setImage("cloud/23");
        } else if (code === 1150) {
          setImage("cloud/7");
        } else if (code === 1153) {
          setImage("cloud/7");
        } else if (code === 1168) {
          setImage("cloud/18");
        } else if (code === 1171) {
          setImage("cloud/18");
        } else if (code === 1180) {
          setImage("sun/8");
        } else if (code === 1183) {
          setImage("cloud/7");
        } else if (code === 1186) {
          setImage("cloud/7");
        } else if (code === 1189) {
          setImage("cloud/7");
        } else if (code === 1192) {
          setImage("cloud/7");
        } else if (code === 1195) {
          setImage("cloud/7");
        } else if (code === 1198) {
          setImage("cloud/22");
        } else if (code === 1201) {
          setImage("cloud/22");
        } else if (code === 1204) {
          setImage("cloud/22");
        } else if (code === 1207) {
          setImage("cloud/22");
        } else if (code === 1210) {
          setImage("cloud/23");
        } else if (code === 1213) {
          setImage("cloud/23");
        } else if (code === 1216) {
          setImage("cloud/23");
        } else if (code === 1219) {
          setImage("cloud/23");
        } else if (code === 1222) {
          setImage("cloud/18");
        } else if (code === 1225) {
          setImage("cloud/18");
        } else if (code === 1237) {
          setImage("snow/36");
        } else if (code === 1240) {
          setImage("sun/8");
        } else if (code === 1243) {
          setImage("sun/8");
        } else if (code === 1246) {
          setImage("cloud/7");
        } else if (code === 1249) {
          setImage("cloud/22");
        } else if (code === 1252) {
          setImage("cloud/22");
        } else if (code === 1255) {
          setImage("cloud/22");
        } else if (code === 1258) {
          setImage("cloud/22");
        } else if (code === 1261) {
          setImage("cloud/22");
        } else if (code === 1264) {
          setImage("snow/36");
        } else if (code === 1273) {
          setImage("cloud/12");
        } else if (code === 1276) {
          setImage("cloud/12");
        } else if (code === 1279) {
          setImage("cloud/25");
        } else if (code === 1282) {
          setImage("cloud/28");
        } else {
          setImage("sun/25");
        }
      }
      //night
      else {
        if (code === 1000) {
          setImage("moon/10");
        } else if (code === 1003) {
          setImage("moon/15");
        } else if (code === 1006) {
          setImage("cloud/35");
        } else if (code === 1009) {
          setImage("cloud/35");
        } else if (code === 1030) {
          setImage("cloud/35");
        } else if (code === 1063) {
          setImage("moon/1");
        } else if (code === 1066) {
          setImage("moon/1");
        } else if (code === 1069) {
          setImage("moon/1");
        } else if (code === 1072) {
          setImage("moon/1");
        } else if (code === 1087) {
          setImage("cloud/12");
        } else if (code === 1114) {
          setImage("cloud/23");
        } else if (code === 1117) {
          setImage("cloud/18");
        } else if (code === 1135) {
          setImage("cloud/35");
        } else if (code === 1147) {
          setImage("cloud/23");
        } else if (code === 1150) {
          setImage("cloud/7");
        } else if (code === 1153) {
          setImage("cloud/7");
        } else if (code === 1168) {
          setImage("cloud/18");
        } else if (code === 1171) {
          setImage("cloud/18");
        } else if (code === 1180) {
          setImage("moon/1");
        } else if (code === 1183) {
          setImage("cloud/7");
        } else if (code === 1186) {
          setImage("cloud/7");
        } else if (code === 1189) {
          setImage("cloud/7");
        } else if (code === 1192) {
          setImage("cloud/7");
        } else if (code === 1195) {
          setImage("cloud/7");
        } else if (code === 1198) {
          setImage("cloud/22");
        } else if (code === 1201) {
          setImage("cloud/22");
        } else if (code === 1204) {
          setImage("cloud/22");
        } else if (code === 1207) {
          setImage("cloud/22");
        } else if (code === 1210) {
          setImage("cloud/23");
        } else if (code === 1213) {
          setImage("cloud/23");
        } else if (code === 1216) {
          setImage("cloud/23");
        } else if (code === 1219) {
          setImage("cloud/23");
        } else if (code === 1222) {
          setImage("cloud/18");
        } else if (code === 1225) {
          setImage("cloud/18");
        } else if (code === 1237) {
          setImage("snow/36");
        } else if (code === 1240) {
          setImage("moon/1");
        } else if (code === 1243) {
          setImage("moon/1");
        } else if (code === 1246) {
          setImage("cloud/7");
        } else if (code === 1249) {
          setImage("cloud/22");
        } else if (code === 1252) {
          setImage("cloud/22");
        } else if (code === 1255) {
          setImage("cloud/22");
        } else if (code === 1258) {
          setImage("cloud/22");
        } else if (code === 1261) {
          setImage("cloud/22");
        } else if (code === 1264) {
          setImage("snow/36");
        } else if (code === 1273) {
          setImage("cloud/12");
        } else if (code === 1276) {
          setImage("cloud/12");
        } else if (code === 1279) {
          setImage("cloud/25");
        } else if (code === 1282) {
          setImage("cloud/28");
        } else {
          setImage("moon/10");
        }
      }
    }
  };
  const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
  };

  return (
    <main>
      <div className="container mt-3 c-100">
        <div className="weather-image mb-3">
            <p>{date}</p>
          <img
            className="img-fluid shadow"
            src={`${process.env.PUBLIC_URL}/images/${image}.png`}
            alt="weatherimage"
          />
        </div>
        <div>
          <p className="mb-0">{weather}</p>
          <h3 className="temp">{temp}°</h3>
          <p>
            <FiWind className="me-1" /> {wind}
            <FiDroplet className="ms-2 me-1 " /> {humid} %
          </p>
        </div>
        {!data ? (
          <Spinner animation="border" />
        ) : (
          <div className="container-card mt-3">
            <Carousel
              itemsToShow={3}
              pagination={false}
              showArrows={false}
              verticalMode={false}
            >
              {data.map((item) => {
                //console.log(item.time)
                return (
                  <TodayCard data={item} onClick={() => handleClick(item)}/>
                  );
                  })}
            </Carousel>
          </div>
        )}
      </div>
      <ModalTomorrow
        data={modalItem}
        isShow={modalShow}
        onCancel={() => setModalShow(false)}
      />
    </main>
  );
}