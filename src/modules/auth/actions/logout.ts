'use server'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { http } from '@/lib/http'

export const logout = async (accessToken: any) => {
	const cookieStore = await cookies()
	const decoded = jwtDecode(accessToken)
	console.log(decoded.sub)

	if (decoded) {
		const response = await http.put(`auth/logout/${decoded.sub}`)

		if (response.type === 'error') {
			return { error: response.payload.message }
		}

		cookieStore.delete('refreshToken')
		redirect('/auth/login')
	}
	return { error: 'Đăng xuất thất bại' }
}
