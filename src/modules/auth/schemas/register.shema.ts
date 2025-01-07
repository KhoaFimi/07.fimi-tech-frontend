import { z } from 'zod'

export const registerSchema = z
	.object({
		fullname: z.string().min(1, { message: 'Nhập họ và tên' }),
		email: z.string().min(1, { message: 'Nhập email' }),
		phone: z.string().min(1, { message: 'Nhập số điện thoại' }),
		password: z
			.string()
			.min(8, { message: 'Mật khẩu phải có tối thiểu 8 ký tự' })
			.max(64, { message: 'Mật khẩu không quá 64 ký tự' })
			.refine(password => /[A-Z]/.test(password), {
				message: 'Mật khẩu phải có tối thiểu 1 ký tự in hoa'
			})
			.refine(password => /[a-z]/.test(password), {
				message: 'Mật khẩu phải có tối thiểu 1 ký tự in thường'
			})
			.refine(password => /[0-9]/.test(password), {
				message: 'Mật khẩu phải có 1 chữ số'
			}),
		rePassword: z.string().min(1, { message: 'xác nhân password' }),
		tnc: z.boolean().default(true),
		platformCode: z.string()
	})
	.refine(({ password, rePassword }) => password === rePassword, {
		message: 'Mật khẩu không khớp',
		path: ['rePassword']
	})

export type RegisterSchema = z.infer<typeof registerSchema>
