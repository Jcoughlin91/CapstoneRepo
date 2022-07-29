import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Bio) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender();
}

function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Bio";
        switch (view) {
          case "Home": {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
              )
              .then(response => {
                const kelvinToFahrenheit = kelvinTemp =>
                  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

                store.Bio.weather = {};
                store.Bio.weather.city = response.data.name;
                store.Bio.weather.temp = kelvinToFahrenheit(
                  response.data.main.temp
                );
                store.Bio.weather.feelsLike = kelvinToFahrenheit(
                  response.data.main.feels_like
                );
                store.Bio.weather.description = response.data.weather[0].main;
                done();
              })
              .catch(err => console.log(err));
            break;
          }
done();

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
