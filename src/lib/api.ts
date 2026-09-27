import type { api, json } from "@/interface";
import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

const jar = new CookieJar();
const URL = "https://api-mpop-backend.onrender.com";

const base = wrapper(
  axios.create({
    baseURL: URL,
    jar,
    withCredentials: true,
  }),
);

function response(data: any, status: number): api {
  try {
    if (status >= 200 && status < 300) {
      if (Array.isArray(data)) {
        return {
          message: "Data fetched",
          data,
        };
      } else if (data && typeof data === "object") {
        return {
          message: "Data fetched",
          ...data,
        };
      }
    }
    const errorMessage =
      data && typeof data === "object" && "error" in data && data.error
        ? String(data.error)
        : "Something went wrong";
    throw new Error(errorMessage);
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

export async function get(
  endpoint: string,
  params?: Record<string, any> | api | api[],
): Promise<api> {
  let code = 0;
  try {
    const { data, status } = await base.get(endpoint, {
      params,
      withCredentials: true,
    });
    code = status;
    return response(data, status);
  } catch (e: any) {
    const status = e?.response?.status ?? code ?? 500;
    const errorData =
      e?.response?.data ?? { error: e?.message ?? "Request failed" };
    return response(errorData, status);
  }
}

export async function adminGet(
  endpoint: string,
  adminCode: string,
  params?: Record<string, any> | api | api[],
): Promise<api> {
  if (!adminCode || adminCode.trim() === "") {
    return {
      error: "No Code Inserted",
    };
  }
  let code = 0;
  try {
    const { data, status } = await base.get(endpoint, {
      params,
      withCredentials: true,
      headers: {
        "X-API-Key": adminCode,
      },
    });
    code = status;
    return response(data, status);
  } catch (e: any) {
    const status = e?.response?.status ?? code ?? 500;
    const errorData =
      e?.response?.data ?? { error: e?.message ?? "Request failed" };
    return response(errorData, status);
  }
}

export async function post(
  endpoint: string,
  body?: any,
): Promise<api> {
  let code = 0;
  try {
    try {
      await base.get("set-cookie");
    } catch {
      // Ignore if set-cookie is not implemented or already set
    }

    const { data, status } = await base.post(endpoint, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    code = status;
    return response(data, status);
  } catch (e: any) {
    const status = e?.response?.status ?? code ?? 500;
    const errorData =
      e?.response?.data ?? { error: e?.message ?? "Request failed" };
    return response(errorData, status);
  }
}

export async function adminPost(
  endpoint: string,
  adminCode: string,
  params?: any,
): Promise<api> {
  if (!adminCode || adminCode.trim() === "") {
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
        "X-API-Key": adminCode,
      },
    });
    code = status;
    return response(data, status);
  } catch (e: any) {
    const status = e?.response?.status ?? code ?? 500;
    const errorData =
      e?.response?.data ?? { error: e?.message ?? "Request failed" };
    return response(errorData, status);
  }
}

export async function adminPostMultipart(
  endpoint: string,
  adminCode: string,
  formData: FormData,
): Promise<api> {
  if (!adminCode || adminCode.trim() === "") {
    return {
      error: "No Code Inserted",
    };
  }
  let code = 0;
  try {
    const { data, status } = await base.post(endpoint, formData, {
      headers: {
        "X-API-Key": adminCode,
      },
    });
    code = status;
    return response(data, status);
  } catch (e: any) {
    const status = e?.response?.status ?? code ?? 500;
    const errorData =
      e?.response?.data ?? { error: e?.message ?? "Request failed" };
    return response(errorData, status);
  }
}

export async function adminPut(
  endpoint: string,
  adminCode: string,
  params?: any,
): Promise<api> {
  if (!adminCode || adminCode.trim() === "") {
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
        "X-API-Key": adminCode,
      },
    });
    code = status;
    return response(data, status);
  } catch (e: any) {
    const status = e?.response?.status ?? code ?? 500;
    const errorData =
      e?.response?.data ?? { error: e?.message ?? "Request failed" };
    return response(errorData, status);
  }
}

export function retrieval(
  endpoint: string,
  params?: Record<string, any> | json,
): string {
  let url = URL;
  if (!url.endsWith("/") && endpoint !== "" && !endpoint.startsWith("/")) {
    url += "/";
  }

  let finalEndpoint = endpoint;
  if (params && typeof params === "object") {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    }
    const query = searchParams.toString();
    if (query) {
      finalEndpoint += (finalEndpoint.includes("?") ? "&" : "?") + query;
    }
  }
  return `${url}${finalEndpoint}`;
}
