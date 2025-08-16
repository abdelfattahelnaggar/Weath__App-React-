import React from "react";
import "./BackgroundLayer.css";
import Weather from "../Weather/Weather";
export default function BackgroundLayer() {
  return (
    <div className="background__layer d-flex flex-column justify-content-center align-items-center min-vh-100 pt-5 text-center">
      <div className="clouds-container z-0">
        {/* Large background clouds */}
        <i className="bi bi-cloud-fill cloud cloud-1"></i>
        <i className="bi bi-cloud-fill cloud cloud-2"></i>
        <i className="bi bi-cloud-fill cloud cloud-3"></i>
        <i className="bi bi-cloud-fill cloud cloud-4"></i>
        <i className="bi bi-cloud-fill cloud cloud-5"></i>
        <i className="bi bi-cloud-fill cloud cloud-6"></i>
      </div>
      <h1 className="display-2 fw-bold">Weather App</h1>
      <p className="lead my-3">
        Check the weather for today, tomorrow and the day after in your city
      </p>
      <div className="row justify-content-center container">
        <Weather />
      </div>
    </div>
  );
}
