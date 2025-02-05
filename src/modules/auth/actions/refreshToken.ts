'use server'

import { cookies } from 'next/headers'

import { http } from '@/lib/http'

export const refreshToken = async () => {
	const cookieStore = await cookies()
	const refreshToken = cookieStore.get('refreshToken')?.value

	if (!refreshToken) {
		return { error: 'refreshToken not found. Please log in again.' }
	}

	const response = await http.get('auth/refresh-token', {
		headers: {
			'X-REFRESH-TOKEN': refreshToken
		}
	})

	cookieStore.delete('refreshToken')
	cookieStore.delete('accessToken')

	await cookieStore.set('accessToken', response.payload.data.accessToken, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24 * 7,
		sameSite: 'none',
		path: '/'
	})

	await cookieStore.set('refreshToken', response.payload.data.refreshToken, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24 * 30,
		sameSite: 'none',
		path: '/'
	})

	if (response.type === 'error') {
		return { error: response.payload.message }
	}

	return {
		accessToken: response.payload.data.accessToken,
		refreshToken: response.payload.data.refreshToken
	}
}
