import { z } from 'zod'

export const otpSchema = z.object({
	verificationKey: z.string(),
	otp: z
		.string()
		.min(6, { message: 'Otp phải có đủ 6 ký tự' })
		.max(6, { message: 'Otp không được dài hơn 6 ký tự' })
})

export type OtpSchema = z.infer<typeof otpSchema>
