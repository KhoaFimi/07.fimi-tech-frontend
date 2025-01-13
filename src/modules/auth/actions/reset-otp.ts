'use server'

import { http } from '@/lib/http'
import {
	ResetOtpSchema,
	resetOtpSchema
} from '@/modules/auth/schemas/resetOtp.schema'

export const resetOtp = async (values: ResetOtpSchema) => {
	const _validateData = resetOtpSchema.safeParse(values)

	const response = await http.get('auth/new-otp')

	if (response.type === 'error') {
		console.log(response)
		return { error: response.payload.message }
	}
}
