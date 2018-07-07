import axios from "axios";
import { maps } from "../maps/urls"
const { urls: $U } = maps;

export const request = (requestObject) => {
  axios.defaults.baseURL = $U.BASE_URL;

  return axios(requestObject);
};

export const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie != "") {
    let cookies = document.cookie.split(";");
    cookies.forEach(el => {
      let cookie = el.trim();

      if (cookie.substring(0, name.length + 1) == name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
      }
    });
  }
  return cookieValue;
};

export const setCookie = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
