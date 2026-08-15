import type { api } from "@/interface";
import axios, { type AxiosResponse } from "axios";
import { CookieJar } from "tough-cookie";

const w = await import("axios-cookiejar-support")
const jar = new CookieJar()

const URL = "http://localhost:8000" // "https://api-mpop-backend.onrender.com";
const base = axios.create({
  baseURL: URL,
  jar,
  withCredentials: true
})

function response(data: api | AxiosResponse, status: number): api {
  try {
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
    throw new Error(data?.error ?? "Something went wrong");
  } catch (e) {
    return {
      error: e,
    };
  }
}

export async function get(endpoint: string, params?: api | api[]) {
  try {
    const { data, status } = await base.get(endpoint, {
      params: params,
      withCredentials: true
    })
    return response(data, status)
  } catch (e) {
    return response({ "error": e }, 500)
  }
}


export async function adminGet(
  endpoint: string,
  adminCode: string,
  params?: api | api[],
) {
  let code = 0;
  try {
    const { data, status } = await base.get(endpoint, {
      params: params,
      withCredentials: true,
      headers: {
        "X-API-Key": `${adminCode}`,
      },
    });
    code = status;
    return response(data, status);
  } catch (e) {
    return response({}, code);
  }
}

export async function post(endpoint: string, body: api | api[]) {
  try {
    const client = w.wrapper(base);
    await client.get("set-cookie");

    const { data, status } = await client.post(endpoint, body)
    return response(data, status)
  } catch (e) {
    return response({}, 500)
  }
}

export async function adminPost(
  endpoint: string,
  adminCode: string,
  params?: api | api[],
) {
  if (adminCode.trim() == "") {
    return {
      error: "No Code Inserted",
    };
  }
  let code = 0;
  try {
    const { data, status } = await base.post(endpoint, params, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-Key": `${adminCode}`,
      },
    });
    code = status;
    return response(data, status);
  } catch (e) {
    return response({}, code);
  }
}

export async function adminPostMultipart(
  endpoint: string,
  adminCode: string,
  formData: FormData,
) {
  if (adminCode.trim() == "") {
    return {
      error: "No Code Inserted",
    };
  }
  let code = 0;
  try {
    const { data, status } = await base.post(endpoint, formData, {
      headers: {
        "X-API-Key": `${adminCode}`,
      },
    });
    code = status;
    return response(data, status);
  } catch (e) {
    response({}, code);
  }
}

export async function adminPut(
  endpoint: string,
  adminCode: string,
  params?: api | api[],
) {
  if (adminCode.trim() == "") {
    return {
      error: "No Code Inserted",
    };
  }
  let code = 0;
  try {
    const { data, status } = await base.put(endpoint, params, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-Key": `${adminCode}`,
      },
    });
    code = status;
    return response(data, status);
  } catch (e) {
    return response({}, code);
  }
}


export function retrieval(endpoint: string, params?: api) {
  let url = URL;
  if (!url.endsWith("/") && endpoint != "") {
    url += "/";
  }

  if (params) {
    const query = new URLSearchParams(params).toString();
    endpoint += `?${query}`;
  }
  return `${url}${endpoint}`;
}
