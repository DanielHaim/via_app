import axios from "axios"

const api = (fn, args) =>
	fn
		.apply(axios, args)
		.then(
			  res => res.data,
			  res =>
				Promise.reject(
					res instanceof Error
						? res
						: res.response
							? new Error(`${res.response.statusText} (${res.response.status})`)
							: console.error(res)				
				)
		);

export const get = (...rest) => api(axios.get, rest);
export const post = (...rest) => api(axios.post, rest);
export const put = (...rest) => api(axios.put, rest);
export const _delete = (...rest) => api(axios.delete, rest);