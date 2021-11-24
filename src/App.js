import { React, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Tomorrow from "./pages/Tomorrow";
import FiveDays from "./pages/FiveDays";
import About from "./pages/About";
import {
  FormControl,
  Container,
  Navbar,
  Button,
  InputGroup,
  Spinner
} from "react-bootstrap";

function App() {
  const [city, setCity] = useState("London");
  const [data,setData] = useState(null);
  const [code, setCode] = useState(null);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState(null);
  const weatherFunction = async (city, lat, lng) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${city}&days=5&aqi=yes&alerts=yes`
      );

      if (response.status === 200) {
        console.log(response.data)
        setData(response.data);
        setCode(response.data["current"]["condition"]["code"]);
        setTime(response.data["location"]["localtime"]);
        //return response.data["features"][0]["context"][3]["text"];
      }
    } catch (err) {
      console.log(err);
    }
  };
  const styleFunction = async (time) => {
      const clock = time.split(" ")[1];
      const hour = Number(clock.split(":")[0]);
    if (8 < hour && hour < 17) {
      if (code === 1000) {
        setStyle("sun");
        
      } else if (code === 1003) {
        setStyle("sun");
        
      } else if (code === 1006) {
        setStyle("cloud");
        
      } else if (code === 1009) {
        setStyle("cloud");
        
      } else if (code === 1030) {
        setStyle("cloud");
        
      } else if (code === 1063) {
        setStyle("sun");
        
      } else if (code === 1066) {
        setStyle("sun");
        
      } else if (code === 1069) {
        setStyle("sun");
        
      } else if (code === 1072) {
        setStyle("sun");
        
      } else if (code === 1087) {
        setStyle("cloud");
        
      } else if (code === 1114) {
        setStyle("cloud");
        
      } else if (code === 1117) {
        setStyle("cloud");
        
      } else if (code === 1135) {
        setStyle("cloud");
        
      } else if (code === 1147) {
        setStyle("cloud");
        
      } else if (code === 1150) {
        setStyle("cloud");
        
      } else if (code === 1153) {
        setStyle("cloud");
        
      } else if (code === 1168) {
        setStyle("cloud");
        
      } else if (code === 1171) {
        setStyle("cloud");
        
      } else if (code === 1180) {
        setStyle("sun");
        
      } else if (code === 1183) {
        setStyle("cloud");
        
      } else if (code === 1186) {
        setStyle("cloud");
        
      } else if (code === 1189) {
        setStyle("cloud");
        
      } else if (code === 1192) {
        setStyle("cloud");
        
      } else if (code === 1195) {
        setStyle("cloud");
        
      } else if (code === 1198) {
        setStyle("cloud");
        
      } else if (code === 1201) {
        setStyle("cloud");
        
      } else if (code === 1204) {
        setStyle("cloud");
        
      } else if (code === 1207) {
        setStyle("cloud");
        
      } else if (code === 1210) {
        setStyle("cloud");
        
      } else if (code === 1213) {
        setStyle("cloud");
        
      } else if (code === 1216) {
        setStyle("cloud");
        
      } else if (code === 1219) {
        setStyle("cloud");
        
      } else if (code === 1222) {
        setStyle("cloud");
        
      } else if (code === 1225) {
        setStyle("cloud");
        
      } else if (code === 1237) {
        setStyle("cloud");
        
      } else if (code === 1240) {
        setStyle("sun");
        
      } else if (code === 1243) {
        setStyle("sun");
        
      } else if (code === 1246) {
        setStyle("cloud");
        
      } else if (code === 1249) {
        setStyle("cloud");
        
      } else if (code === 1252) {
        setStyle("cloud");
        
      } else if (code === 1255) {
        setStyle("cloud");
        
      } else if (code === 1258) {
        setStyle("cloud");
        
      } else if (code === 1261) {
        setStyle("cloud");
        
      } else if (code === 1264) {
        setStyle("cloud");
        
      } else if (code === 1273) {
        setStyle("cloud");
        
      } else if (code === 1276) {
        setStyle("cloud");
        
      } else if (code === 1279) {
        setStyle("cloud");
        
      } else if (code === 1282) {
        setStyle("cloud");
        
      } else {
        setStyle("sun");
        
      }
      setLoading(true);
    } else {
      setStyle("night");
      console.log("night"); 
      setLoading(true);
    }
    
  }
  const cityFunction = async () => {
    try {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      async function success(pos) {
        const crd = pos.coords;
        const lat = crd.latitude.toString();
        const lng = crd.longitude.toString();
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        try {
          const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_API}`
          );

          if (response.status === 200) {
            setCity(response.data["features"][0]["context"][3]["text"]);
            //return response.data["features"][0]["context"][3]["text"];
          }
        } catch (err) {
          console.log(err);
        }
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    cityFunction();
  }, []);
  useEffect(() => {
    if (city != null) {
    weatherFunction(city);
    }
  }, [city]);
  useEffect(()=>{
    if(time != null) {
    styleFunction(time)
    }
  },[time])

  const onSearch = (e) => {
    if (e.key === "Enter") {
      //setisLoaded(false);
      //setQuery(e.target.value);
      setCity(e.target.value);
    }
  };
  return (
    <div className={`App ${style}`}>
      <div className="onehundred">
      {loading ? (
      <Router>
        <Container>
          <Container>
        <Navbar expand="lg">

          <Container>

            <InputGroup>
              <FormControl
                placeholder={city}
                
                onKeyDown={(e) => onSearch(e)}
              />
              <Button variant="outline-secondary" href="/about">
                About
              </Button>
            </InputGroup>

          </Container>
          </Navbar>
          <Navbar expand="lg">
          <Container>

            <NavLink to="/" className={style} activeClassName={`active-${style}`}>
              Today
            </NavLink>

            <NavLink
              to="/tomorrow"
              className={style}
              activeClassName={`active-${style}`}
            >
              Tomorrow
            </NavLink>

            <NavLink
              to="/five"
              className={style}
              activeClassName={`active-${style}`}
            >
              3 days
            </NavLink>

          </Container>

        </Navbar>
        </Container>
        <Routes>
          <Route exact path="/" element={<LandingPage city={city} time={time} code={code} data={data}/>} />
          <Route path="/tomorrow" element={<Tomorrow city={city} time={time} code={code} data={data} />} />
          <Route path="/five" element={<FiveDays city={city} time={time} code={code} data={data} />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </Container>
      </Router>) : (
      <div className="loading">
      <Spinner animation="border" className="align-middle"/>
      </div>
      )}
      </div>
    </div>
  );
}

export default App;
