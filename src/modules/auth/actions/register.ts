'use server'

import { AxiosError } from 'axios'

import { instance } from '@/lib/http'
import {
	RegisterSchema,
	registerSchema
} from '@/modules/auth/schemas/register.shema'

export const register = async (values: RegisterSchema) => {
	const validateData = registerSchema.safeParse(values)

	if (!validateData.success) {
		return { error: validateData.error.message }
	}

	const body = validateData.data

	try {
		const response = await instance.post('publishers/register', body)

		console.log(response.data)

		return { error: 'Verification key not found in response.' }
	} catch (error) {
		if (error instanceof AxiosError) console.error(error)
		return {
			error: error
		}
	}
}
