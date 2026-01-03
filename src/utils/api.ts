import axios from "axios";
import { gist, json } from "./interfaces";

const TEST_MODE = true;

const URL = TEST_MODE
  ? "http://localhost:8000"
  : "https://api-mpop-backend.onrender.com";

export default async function API(): Promise<gist> {
  const { data } = await axios.get(
    "https://api.github.com/gists/103b8884c900bae1e495afa2c495ff4c",
  );
  const response = JSON.parse(data.files["projects.json"].content);
  return response;
}

function urlChecker(endpoint: string) {
  let url = URL;
  if (!url.endsWith("/")) {
    url += "/";
  }
  return `${url}${endpoint}/`;
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
