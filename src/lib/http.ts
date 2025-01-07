import { config } from '@/lib/config'
import { ErrorCode, IResponse, SuccessCode } from '@/types'

type CustomOptions = Omit<RequestInit, 'method'> & {
	authToken?: string
}

type ResponseType = 'error' | 'success'

type ResponsePayload<T = null> = {
	statusCode: SuccessCode | ErrorCode
	message: string
	data: T
}

type ResponseInit<T = null> = {
	status: number
	type: ResponseType
	payload: ResponsePayload<T>
}

class Response<T = null> {
	status: number
	type: ResponseType
	payload: ResponsePayload<T>

	constructor({ status, type, payload }: ResponseInit<T>) {
		this.status = status
		this.type = type
		this.payload = payload
	}
}

export const request = async <TBody = any, TResponseData = any>(
	url: string,
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
	options?: CustomOptions
) => {
	const reqUrl = new URL(url, config.NEXT_PUBLIC_API_ENDPOINT)

	let body: FormData | TBody | string | undefined = undefined

	if (options?.body instanceof FormData) {
		body = options.body
	} else if (options?.body) {
		body = JSON.stringify(options.body)
	}

	const baseHeaders: {
		[key: string]: string
	} =
		body instanceof FormData
			? {}
			: {
					'Content-Type': 'application/json'
				}

	if (options?.authToken) {
		baseHeaders.Authorization = `Bearer ${options.authToken}`
	}

	const res = await fetch(reqUrl, {
		body,
		method,
		headers: {
			...baseHeaders,
			'X-API-KEY': config.API_KEY,
			'X-PARTNER-CODE': config.PARTNER_CODE
		}
	})

	const data: IResponse<TResponseData> = await res.json()

	return new Response({
		status: res.status,
		type: res.ok ? 'success' : 'error',
		payload: {
			...data
		}
	})
}

export const http = {
	get: async (url: string, options?: CustomOptions) =>
		await request(url, 'GET', options),
	post: async <T extends BodyInit>(
		url: string,
		body: T,
		options?: CustomOptions
	) => await request(url, 'POST', { ...options, body }),
	put: async <T extends BodyInit>(
		url: string,
		body: T,
		options?: CustomOptions
	) => await request(url, 'PUT', { ...options, body }),
	patch: async <T extends BodyInit>(
		url: string,
		body: T,
		options?: CustomOptions
	) => await request(url, 'PATCH', { ...options, body }),
	delete: async (url: string, options?: CustomOptions) =>
		await request(url, 'DELETE', { ...options })
}
