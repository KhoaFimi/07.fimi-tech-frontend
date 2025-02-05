'use server'

import { cookies } from 'next/headers'

import { http } from '@/lib/http'
import { validationError } from '@/lib/server/validation-error'
import { otpSchema } from '@/modules/auth/schemas/otp.schema'

export const otpChangeEmail = async (values: any) => {
	const validationData = otpSchema.safeParse(values)
	const cookieStore = await cookies()
	const accessToken = cookieStore.get('accessToken')?.value

	if (!accessToken) {
		return { error: 'Access token not found. Please log in again.' }
	}

	if (!validationData.success) {
		return { error: validationError(validationData.error) }
	}

	const response = await http.post(
		`accounts/change-email/`,
		validationData.data,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)

	if (response.type === 'error') {
		console.log(response)
		return { error: response.payload.message }
	}
}
