import { z } from 'zod'

export const resetOtpSchema = z.object({
	verificationKey: z.string()
})

export type ResetOtpSchema = z.infer<typeof resetOtpSchema>
