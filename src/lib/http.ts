import { IResponse } from '@/types'

import { config } from './config'

export const apiRequest = async <T = any>(
	endpoint: string,
	data: any,
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
	authToken?: string
) => {
	const url = new URL(endpoint, config.BACKEND_URL)

	try {
		const response = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': config.API_KEY,
				'X-PARTNER-CODE': config.PARTNER_CODE,
				Authorization: `Bearer ${authToken}`
			},
			body: JSON.stringify(data)
		})

		const result: IResponse<T> = await response.json()

		if (!response.ok) {
			throw new Error(result.statusCode, {
				cause: result.message
			})
		}

		return result
	} catch (error) {
		console.log(error)
	}
}
