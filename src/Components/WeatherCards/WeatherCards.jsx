import "./WeatherCards.css";
import { DateTime } from "luxon";

export default function WeatherCards({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }
  const forecastDays = data.forecast.forecastday || [];
  const dayLabels = ["Current", "Tomorrow", "Day After"];
  console.log(data.current.condition.text);
  console.log(data);
  return (
    <>
      {forecastDays.map((day, index) => (
        <div key={day.date} className="col-md-4">
          <div className="card py-3 border-1">
            <h4 className="fs-5">{dayLabels[index]}</h4>
            <h6 className="fw-normal mb-0">
              {DateTime.fromISO(day.date).toFormat("EEE, MMM dd")}
            </h6>
            <figure className="condition-icon my-3">
              <img
                src={
                  index === 0
                    ? data.current.condition.icon
                    : day.day.condition.icon
                }
                alt="Day Condition Icon"
              />
            </figure>
            <h3 className="fw-bold mt-0">
              {index === 0
                ? `${data.current.temp_c}°C`
                : `${day.day.maxtemp_c}°C`}
            </h3>
            <p className="mb-0 condition-text">
              {index === 0
                ? data.current.condition.text
                : day.day.condition.text}
            </p>
            <hr className="w-75 mx-auto text-secondary rounded-5" />
            <div className="statistics d-flex justify-content-evenly align-items-center">
              <div className="item d-flex flex-column">
                <i className="bi bi-moisture fs-5"></i>
                <small className="fw-normal statistic-name">Humidity</small>
                <span className="fw-bold">
                  {index === 0
                    ? `${data.current.humidity}%`
                    : `${day.day.avghumidity}%`}
                </span>
              </div>
              <div className="item d-flex flex-column">
                <i className="bi bi-wind fs-5"></i>
                <small className="fw-normal statistic-name">Humidity</small>
                <span className="fw-bold">
                  {index === 0
                    ? `${data.current.wind_mph} mph`
                    : `${day.day.maxwind_mph} mph`}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
