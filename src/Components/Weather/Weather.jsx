import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import WeatherCards from "../WeatherCards/WeatherCards";
import axios from "axios";
export default function Weather() {
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  async function fetchData(trimmedCity = "New York") {
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(
          trimmedCity
        )}&days=3`
      );
      setData(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please check the city name or try again later.",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      console.log("Error fetching weather data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  function handleSearch(event) {
    try {
      event.preventDefault();
      let input;
      if (event.target.tagName === "INPUT") {
        // If Enter key was pressed on input
        input = event.target;
      } else {
        // If button was clicked, find the input in the parent form
        input = event.target.closest(".input-group").querySelector("input");
      }

      const trimmedCity = input.value.trim();
      if (trimmedCity) {
        fetchData(trimmedCity);
        input.value = ""; // Clear the input field after search
      }
    } catch (error) {
      console.error("Error handling search:", error);
    }
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <form onSubmit={handleSearch} className="input-group mb-3 py-2 w-50">
        <input
          type="text"
          className="form-control bg-body-secondary py-2"
          placeholder="Enter city name"
          aria-label="Enter city name"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-dark py-2" type="submit" id="button-addon2">
          Search
        </button>
      </form>
      <h2 className="text-center mb-4 ">Weather in {data.location.name}</h2>
      <div className="row g-3">
        <WeatherCards data={data} />
      </div>
    </>
  );
}
