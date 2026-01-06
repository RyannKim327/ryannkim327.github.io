import axios from "axios";
import { json } from "./interfaces";

const TEST_MODE = false;

const URL = TEST_MODE
  ? "http://localhost:8000"
  : "https://api-mpop-backend.onrender.com";

// NOTE: The https://api-mpop-backend.onrender.com is the backend
// for this repository, you may visit my github for the link of the
// backend.

function urlChecker(endpoint: string) {
  let url = URL;
  if (!url.endsWith("/") && endpoint != "") {
    url += "/";
  }
  return `${url}${endpoint}`;
}

function response(data: json | json[], status: number): json {
  if (status >= 200 && status < 300) {
    if (Array.isArray(data)) {
      return {
        message: "Data fetched",
        data: data,
      };
    } else if (typeof data === "object") {
      return {
        message: "Data fetched",
        ...data,
      };
    }
  }
  return {
    error: "Something went wrong",
  };
}

export async function get(endpoint: string, params?: json | json[]) {
  const { data, status } = await axios.get(urlChecker(endpoint), {
    params: params,
    withCredentials: true,
  });
  return response(data, status);
}

export async function post(endpoint: string, params?: json | json[]) {
  const { data, status } = await axios.post(urlChecker(endpoint), params, {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response(data, status);
}
