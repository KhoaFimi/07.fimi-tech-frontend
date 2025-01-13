'use server'

import { cookies } from 'next/headers'

import { http } from '@/lib/http'
import { validationError } from '@/lib/server/validation-error'
import { LoginSchema, loginSchema } from '@/modules/auth/schemas/login.schema'

interface IResponse {
	accessToken: string
	refreshToken: string
}
export const login = async (values: LoginSchema) => {
	const validateData = loginSchema.safeParse(values)
	const coockieStore = await cookies()
	if (!validateData.success) {
		return { error: validationError(validateData.error) }
	}

	const body = validateData.data

	const response = await http.post<IResponse>('auth/login', body)

	if (response.type === 'error') {
		return { error: response.payload.message }
	}

	await coockieStore.set('refreshToken', response.payload.data.refreshToken, {
		httpOnly: true,
		secure: true,
		maxAge: 60 * 60 * 24 * 30,
		sameSite: 'none',
		path: '/'
	})

	return {
		success: 'Đăng Nhập Thành Công',
		data: {
			accessToken: response.payload.data.accessToken
		}
	}
}
