'use server'

import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { http } from '@/lib/http'

export const logout = async () => {
	const cookieStore = await cookies()
	const accessToken = cookieStore.get('accessToken')?.value

	if (!accessToken) {
		return { error: 'Access token not found. Please log in again.' }
	}

	const decoded: any = jwtDecode(accessToken)

	if (decoded?.sub) {
		const response = await http.put(`auth/sign-out/${decoded.sub}`)

		if (response.type === 'error') {
			return { error: response.payload.message }
		}
		cookieStore.delete('refreshToken')
		cookieStore.delete('accessToken')

		redirect('/auth/login')
	}
}
