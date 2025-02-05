'use server'

import { cookies } from 'next/headers'

import { http } from '@/lib/http'
import { validationError } from '@/lib/server/validation-error'
import { UserSchema, userSchema } from '@/modules/auth/schemas/user.schema'

export const updateUser = async (values: UserSchema, queryParam: string) => {
	const validateData = userSchema.safeParse(values)

	if (!validateData.success) {
		return { error: validationError(validateData.error) }
	}

	const body = validateData.data
	const requestBody = {
		...body,
		profile: {
			...body.profile,
			dateOfBirth: body.profile?.dateOfBirth
				? new Date(body.profile.dateOfBirth).toISOString()
				: null
		}
	}

	const cookieStore = await cookies()
	const accessToken = cookieStore.get('accessToken')?.value

	const response = await http.put(
		`accounts/update-info/${queryParam}`,
		requestBody,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)
	console.log(response)

	if (response.type === 'error') {
		return { error: response.payload.message }
	}
}
