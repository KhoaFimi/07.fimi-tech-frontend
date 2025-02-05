'use server'

import { cookies } from 'next/headers'

import { http } from '@/lib/http'

export const changePhone = async (phone: string) => {
	const cookieStore = await cookies()
	const accessToken = cookieStore.get('accessToken')?.value

	if (!accessToken) {
		return { error: 'Access token not found. Please log in again.' }
	}

	const userResponse = await http.get('users/me/', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	})

	if (userResponse.type === 'error') {
		return { error: 'Failed to fetch user information.' }
	}

	const userId = userResponse.payload.data.user.id

	const response = await http.put(
		`accounts/change-phone/${userId}`,
		{ phone },
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)

	if (response.type === 'error') {
		return { error: response.payload.message }
	}
}
