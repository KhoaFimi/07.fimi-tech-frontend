'use server'

import { http } from '@/lib/http'
import {
	ResetOtpSchema,
	resetOtpSchema
} from '@/modules/auth/schemas/resetOtp.schema'

export const resetOtp = async (values: ResetOtpSchema) => {
	const validateData = resetOtpSchema.safeParse(values)
	const param = validateData.data

	const response = await http.get('auth/new-otp', {
		params: {
			key: param?.verificationKey
		}
	})

	if (response.type === 'error') {
		console.log(response)
		return { error: response.payload.message }
	}
}
