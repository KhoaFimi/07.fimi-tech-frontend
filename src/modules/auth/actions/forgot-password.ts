'use server'

import { redirect } from 'next/navigation'

import { http } from '@/lib/http'
import { validationError } from '@/lib/server/validation-error'
import {
	ForgotPasswordSchema,
	forgotPasswordSchema
} from '@/modules/auth/schemas/forgot-password-schema'

export const forgotPassword = async (values: ForgotPasswordSchema) => {
	const validateData = forgotPasswordSchema.safeParse(values)

	if (!validateData.success) {
		return { error: validationError(validateData.error) }
	}

	const body = validateData.data

	const response = await http.post('accounts/forgot-password', body)

	if (response.type === 'error') {
		return { error: response.payload.message }
	}

	redirect(`/auth/reset-password?key=${response.payload.data.verificationKey}`)
}
