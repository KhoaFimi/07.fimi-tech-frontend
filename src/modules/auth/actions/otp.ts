'use server'

import { redirect } from 'next/navigation'

import { http } from '@/lib/http'

export const otp = async (validationData: any) => {
	const body = validationData

	const response = await http.post('auth/new-verification', body)

	if (response.type === 'error') {
		console.log(response)
		return { error: response.payload.message }
	}

	redirect(`/auth/login`)
}
