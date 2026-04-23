export function storage(key: string, value?: string | number | boolean) {
	if (value !== undefined) {
		localStorage.setItem(key, value?.toString())
		return value
	} else {
		const d = localStorage.getItem(key) ?? ""
		if (d == "true") {
			return true
		} else if (d == "false") {
			return false
		} else if (Number.isNaN(d)) {
			return parseInt(d)
		} else {
			return d
		}
	}
}

export function session(key: string, value?: string | number | boolean) {
	if (value !== undefined) {
		sessionStorage.setItem(key, value?.toString())
		return value
	} else {
		const d = sessionStorage.getItem(key) ?? ""
		if (d == "true") {
			return true
		} else if (d == "false") {
			return false
		} else if (Number.isNaN(d)) {
			return parseInt(d)
		} else {
			return d
		}
	}
}
