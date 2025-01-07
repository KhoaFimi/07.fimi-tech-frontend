'use server'

import { apiRequest } from '@/lib/http'
import {
	RegisterSchema,
	registerSchema
} from '@/modules/auth/schemas/register.shema'

interface RegisterResponse {
	verificationKey: string
}
export const register = async (values: RegisterSchema) => {
	const validateData = registerSchema.safeParse(values)

	if (!validateData.success)
		return {
			error: validateData.error.message
		}

	const body = validateData.data

	const response = await apiRequest<RegisterResponse>(
		'publishers/register',
		body,
		'POST'
	)
	console.log(response)
}
