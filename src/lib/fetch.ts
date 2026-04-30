import axios, { AxiosResponse } from "axios"
import { CookieJar } from "tough-cookie";

type parameter = Record<string, any>

const URL = "https://mpopreverseii.leapcell.app"
const w = await import("axios-cookiejar-support");
const jar = new CookieJar();
const api = axios.create({
	baseURL: URL,
	jar,
	withCredentials: true
});

function response(data: parameter | AxiosResponse, status: number): parameter {
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
		throw new Error("Something went wrong");
	} catch (e) {
		return {
			error: e,
		};
	}
}

export async function get(endpoint: string, params?: parameter | parameter[]) {
	try {
		const { data, status } = await api.get(endpoint, {
			params: params,
			withCredentials: true
		})
		return response(data, status)
	} catch (e) {
		return response({ "error": "Error" }, 500)
	}
}

export async function adminGet(
	endpoint: string,
	adminCode: string,
	params?: parameter | parameter[],
) {
	let code = 0;
	try {
		const { data, status } = await api.get(endpoint, {
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

export async function post(endpoint: string, body: parameter | parameter[]) {
	try {
		const client = w.wrapper(api);
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
	params?: parameter | parameter[],
) {
	if (adminCode.trim() == "") {
		return {
			error: "No Code Inserted",
		};
	}
	let code = 0;
	try {
		const { data, status } = await api.post(endpoint, params, {
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
		const { data, status } = await api.post(endpoint, formData, {
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
	params?: parameter | parameter[],
) {
	if (adminCode.trim() == "") {
		return {
			error: "No Code Inserted",
		};
	}
	let code = 0;
	try {
		const { data, status } = await api.put(endpoint, params, {
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


export function retrieval(endpoint: string, params?: Record<string, any>) {
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
