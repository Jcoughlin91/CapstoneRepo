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
  afterRender(state);
}

function afterRender(state) {
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
      case "Bio": {
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

      case "Data": {
        axios
          //.get(`https://api.astronomyapi.com/api/v2/bodies`, {
          .get(
            `https://api.astronomyapi.com/api/v2/bodies/positions?latitude=38.624691&longitude=-90.184776&from_date=2017-12-20&to_date=2017-12-21&time=08:00:00&elevation=0`,
            {
              auth: {
                username: process.env.BODIES_USERNAME,
                password: process.env.BODIES_PASSWORD
              }
            }
          )
          .then(response => {
            console.log(response.data);
            store.Data.bodies = response.data.data.bodies;
            done();
          })
          .catch(err => console.log(err));
        break;
      }
      default: {
        done();
      }
    }
  }
});
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
