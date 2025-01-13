'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2, Lock, RectangleEllipsis } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormError } from '@/components/form-response'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot
} from '@/components/ui/input-otp'
import { resetPassword } from '@/modules/auth/actions/reset-password'
import { FormWrapper } from '@/modules/auth/components/form/form-wrapper'
import {
	ResetPasswordSchema,
	resetPasswordSchema
} from '@/modules/auth/schemas/reset-password-schema'

const ResetPasswordForm = () => {
	const searchParams = useSearchParams()
	const [error, setError] = useState<string | undefined>(undefined)
	const form = useForm<ResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			verificationKey: searchParams.get('key') ?? '',
			password: '',
			otp: '',
			confirmPassword: ''
		}
	})

	const { isPending, mutate: onResetpassword } = useMutation({
		mutationFn: async (values: ResetPasswordSchema) =>
			await resetPassword(values),
		onSuccess: data => {
			if (data.error) {
				setError(data.error)
			}
		}
	})

	const onSubmit = (values: ResetPasswordSchema) => {
		onResetpassword(values)
	}

	return (
		<FormWrapper title='Tạo Mật Khẩu Mới'>
			<Form {...form}>
				<form
					autoComplete='autocomplete_off_randString'
					className='mx-auto flex w-full max-w-md flex-col gap-2.5 px-4 pt-4'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						name='password'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
									<Lock
										className='size-3'
										strokeWidth={3}
									/>
									<p className='leading-none'>Mật Khẩu</p>
								</FormLabel>
								<FormControl>
									<Input
										type='password'
										{...field}
										disabled={isPending}
										className='border border-primary text-xs caret-primary focus-visible:outline-none focus-visible:ring-0'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className='flex flex-col space-y-2'>
						<FormField
							name='confirmPassword'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
										<RectangleEllipsis
											className='size-3'
											strokeWidth={3}
										/>
										<p className='leading-none tracking-tight'>
											Xác Nhận Mật khẩu
										</p>
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											type='password'
											disabled={isPending}
											className='border border-primary text-xs caret-primary focus-visible:ring-0'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<h5 className='text-center font-bold'>Nhập Mã OTP</h5>
							<Form {...form}>
								<FormField
									name='otp'
									control={form.control}
									render={({ field }) => (
										<InputOTP
											maxLength={6}
											className='flex flex-col'
											{...field}
											disabled={isPending}
										>
											<InputOTPGroup className='mx-auto'>
												<InputOTPSlot index={0} />
												<InputOTPSlot index={1} />
												<InputOTPSlot index={2} />
											</InputOTPGroup>
											<InputOTPSeparator />
											<InputOTPSeparator />
											<InputOTPGroup className='mx-auto'>
												<InputOTPSlot index={3} />
												<InputOTPSlot index={4} />
												<InputOTPSlot index={5} />
											</InputOTPGroup>
										</InputOTP>
									)}
								/>

								<FormError message={error} />
							</Form>
						</div>
					</div>

					<FormError message={error} />

					<Button
						type='submit'
						size='sm'
						disabled={isPending}
						className='items-center gap-4 bg-gradient-to-tr from-primary from-30% to-secondary text-xs font-bold'
					>
						{isPending && <Loader2 className='size-5 animate-spin' />}
						Tiếp tục
					</Button>
				</form>
			</Form>
		</FormWrapper>
	)
}

export default ResetPasswordForm
