import axios, { AxiosRequestConfig } from 'axios'

import { config } from '@/lib/config'
import { ErrorCode, SuccessCode } from '@/types'

export const request = axios.create({
	baseURL: 'http://localhost:8080/api/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		'X-API-KEY': config.API_KEY,
		'X-PARTNER-CODE': config.PARTNER_CODE
	}
})

interface IPayload<T = null> {
	statusCode: SuccessCode | ErrorCode
	message: string
	data: T
}

interface IResponse<T = null> {
	type: 'error' | 'success'
	status: number
	payload: IPayload<T>
}

class Response<T = null> {
	type: 'error' | 'success'
	status: number
	payload: IPayload<T>

	constructor({ type, status, payload }: IResponse<T>) {
		this.type = type
		this.status = status
		this.payload = payload
	}
}

export const http = {
	get: async <T = any>(url: string, options?: AxiosRequestConfig<any>) => {
		try {
			const res = await request.get<IPayload<T>>(url, options)

			const data = res.data

			return new Response({
				type: 'success',
				status: res.status,
				payload: data
			})
		} catch (error) {
			if (axios.isAxiosError(error) && error.status) {
				const status = error.status
				const payload = error.response?.data as IPayload

				return new Response({
					type: 'error',
					status,
					payload
				})
			}
		}
	},
	post: async <TRes = any, TReq = any>(
		url: string,
		body: TReq,
		options?: AxiosRequestConfig<any>
	) => {
		try {
			const res = await request.post<IPayload<TRes>>(url, body, options)

			const data = res.data

			return new Response({
				type: 'success',
				status: res.status,
				payload: data
			})
		} catch (error) {
			if (axios.isAxiosError(error) && error.status) {
				const status = error.status
				const payload = error.response?.data as IPayload

				return new Response({
					type: 'error',
					status,
					payload
				})
			}
		}
	},
	put: async <TRes = any, TReq = any>(
		url: string,
		body: TReq,
		options?: AxiosRequestConfig<any>
	) => {
		try {
			const res = await request.put<IPayload<TRes>>(url, body, options)

			const data = res.data

			return new Response({
				type: 'success',
				status: res.status,
				payload: data
			})
		} catch (error) {
			if (axios.isAxiosError(error) && error.status) {
				const status = error.status
				const payload = error.response?.data as IPayload

				return new Response({
					type: 'error',
					status,
					payload
				})
			}
		}
	},
	patch: async <TRes = any, TReq = any>(
		url: string,
		body: TReq,
		options?: AxiosRequestConfig<any> | undefined
	) => {
		try {
			const res = await request.patch<IPayload<TRes>>(url, body, options)

			const data = res.data

			return new Response({
				type: 'success',
				status: res.status,
				payload: data
			})
		} catch (error) {
			if (axios.isAxiosError(error) && error.status) {
				const status = error.status
				const payload = error.response?.data as IPayload

				return new Response({
					type: 'error',
					status,
					payload
				})
			}
		}
	},
	delete: async <TRes = any>(
		url: string,
		options?: AxiosRequestConfig<any> | undefined
	) => {
		try {
			const res = await request.delete<IPayload<TRes>>(url, options)

			const data = res.data

			return new Response({
				type: 'success',
				status: res.status,
				payload: data
			})
		} catch (error) {
			if (axios.isAxiosError(error) && error.status) {
				const status = error.status
				const payload = error.response?.data as IPayload

				return new Response({
					type: 'error',
					status,
					payload
				})
			}
		}
	}
}
