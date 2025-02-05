'use server'

import { http } from '@/lib/http'
import {
	ResetOtpSchema,
	resetOtpSchema
} from '@/modules/auth/schemas/resetOtp.schema'

export const resetOtp = async (values: ResetOtpSchema) => {
	const validateData = resetOtpSchema.safeParse(values)
	const param = validateData.data

	const response = await http.get(`accounts/new-otp/${param?.verificationKey}`)

	if (response.type === 'error') {
		return { error: response.payload.message }
	}
}
