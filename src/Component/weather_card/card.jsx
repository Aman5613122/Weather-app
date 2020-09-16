import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

const api_key = "21916b1a020d4a33bb534916203108";

const Card = (props) => {
  const [img, setImage] = useState("");
  const [conditon, setcondtn] = useState("");
  const [name, setName] = useState("");
  const [temp_c, setTemp] = useState("");
  let url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${props.naam}`;
  useEffect(() => {
    const current_data = async () => {
      const weather = await axios.get(url);
      setImage(weather.data.current.condition.icon);
      setcondtn(weather.data.current.condition.text);
      setName(
        weather.data.location.name +
          ", " +
          weather.data.location.region +
          ", " +
          weather.data.location.country
      );
      setTemp(weather.data.current.temp_c);
    };
    current_data();
  });

  return (
    <>
      <div className="card">
        <div className="base_card">
          <h2>{name}</h2>
          <h5>{conditon}</h5>
        </div>
        <div className="card_image">
          <img src={img} title={conditon} alt="weather_image" />
          <h3>{temp_c}°C</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
