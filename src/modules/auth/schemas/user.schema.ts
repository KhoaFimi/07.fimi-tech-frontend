import { z } from 'zod'

export const userSchema = z.object({
	fullname: z.string(),
	email: z
		.string()
		.min(1, { message: 'Vui lòng nhập Email' })
		.email({ message: 'Email không đúng định dạng' }),
	phone: z.string(),
	profile: z.object({
		dateOfBirth: z
			.string()

			.refine(val => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), {
				message: 'Date of birth must be in yyyy-MM-dd format'
			}),
		placeOfBirth: z.string(),
		gender: z.enum(['MALE', 'FEMALE']),
		workAt: z.string(),
		currentAddress: z.object({
			detail: z.string(),
			ward: z.string(),
			district: z.string(),
			province: z.string()
		}),
		bank: z.object({
			accountName: z.string(),
			accountNumber: z.string(),
			name: z.string()
		})
	})
})

export type UserSchema = z.infer<typeof userSchema>
