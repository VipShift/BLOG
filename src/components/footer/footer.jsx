import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWether] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Freiburg, DE&units=metric&lang=ru&appid=1498c247df9d6e8abd9b63620a6d51e2"
    )
      .then((data) => data.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.trunc(main.temp));
        setWether(weather[0].description);
      });
  }, []);

  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработка</div>
        <div>web@developer.de</div>
      </div>
      <div>
        <div>
          {city}{" "}
          {new Date().toLocaleString("ru-RU", {
            day: "numeric",
            month: "long",
            timeZone: "Europe/Berlin",
          })}
        </div>
        <div>
          {temperature}°C, {weather}
        </div>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
  font-weight: bolt;
  width: 1000px;
  height: 100px;
  background-color: #242424;
  box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.25);
`;
