'use server'

import { redirect } from 'next/navigation'

import { http } from '@/lib/http'
import { validationError } from '@/lib/server/validation-error'
import {
	RegisterSchema,
	registerSchema
} from '@/modules/auth/schemas/register.shema'

export const register = async (values: RegisterSchema) => {
	const validateData = registerSchema.safeParse(values)

	if (!validateData.success) {
		return { error: validationError(validateData.error) }
	}

	const body = validateData.data

	const response = await http.post('auth/sign-up', body)

	if (response.type === 'error') {
		if (response.payload?.error.validationError)
			return {
				isValidationError: true,
				error: JSON.stringify(response.payload?.error.validationError)
			}
		else {
			return {
				isValidationError: false,
				error: response.payload.message
			}
		}
	}

	redirect(
		`/auth/email-verification?key=${response.payload.data.verificationKey}`
	)
}
