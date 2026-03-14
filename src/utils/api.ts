import axios from "axios";
import { json } from "./interfaces";
import { decoder } from "./tools";

// NOTE: The backend is now changed, you may still look for it by looking on my github
// for this repository, you may visit my github for the link of the
// backend.

const URL = decoder([
  104, 116, 116, 112, 115, 58, 47, 47, 97, 112, 105, 45, 109, 112, 111, 112, 45,
  98, 97, 99, 107, 101, 110, 100, 46, 111, 110, 114, 101, 110, 100, 101, 114,
  46, 99, 111, 109,
]);

// const URL = decoder([
//   104, 116, 116, 112, 58, 47, 47, 108, 111, 99, 97, 108, 104, 111, 115, 116, 58,
//   56, 48, 48, 48,
// ]);

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

export async function adminPost(
  endpoint: string,
  adminCode: string,
  params?: json | json[],
) {
  if (adminCode.trim() == "") {
    return {
      error: "No Code Inserted",
    };
  }
  const { data, status } = await axios.post(urlChecker(endpoint), params, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Key": `${adminCode}`,
    },
  });
  return response(data, status);
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
  const { data, status } = await axios.post(urlChecker(endpoint), formData, {
    headers: {
      "X-API-Key": `${adminCode}`,
    },
  });
  return response(data, status);
}

export function retrieval(endpoint: string, params?: json) {
  if (params) {
    const query = new URLSearchParams(params).toString();
    return `${urlChecker(endpoint)}?${query}`;
  }
  return urlChecker(endpoint);
}
