'use server'

import { http } from '@/lib/http'

export const role = async (accessToken: string) => {
	const response = await http.get(`users/me`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	})

	if (response.type === 'error') {
		return { error: response.payload.message }
	}
	const userLevel = response.payload.data.user.level
	const userId = response.payload.data.user.id
	const data = response.payload.data

	return {
		level: userLevel,
		id: userId,
		data: data,
		message: 'Lấy thông tin thành công'
	}
}
