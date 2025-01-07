/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormError } from '@/components/form-response'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot
} from '@/components/ui/input-otp'
import { FormWrapper } from '@/modules/auth/components/form/form-wrapper'
import { LoginSchema, loginSchema } from '@/modules/auth/schemas/login.schema'

const OTPForm = () => {
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			phoneOrEmail: '',
			password: ''
		}
	})

	const [error, setError] = useState<string | undefined>(undefined)

	const isPending = false
	return (
		<FormWrapper
			title='Nhập Mã OTP'
			icon={
				<ShieldCheck
					className='size-11'
					strokeWidth={2}
				/>
			}
		>
			<Form {...form}>
				<form
					autoComplete='autocomplete_off_randString'
					className='mx-auto flex w-full max-w-md flex-col items-center gap-2.5 px-4 pt-4'
				>
					<FormField
						name='phoneOrEmail'
						control={form.control}
						render={({ field }) => (
							<InputOTP
								maxLength={4}
								className='flex flex-col items-center justify-center'
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
								</InputOTPGroup>
								<InputOTPSeparator />
								<InputOTPGroup>
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTP>
						)}
					/>

					<FormError message={error} />

					<Button
						type='submit'
						size='sm'
						disabled={isPending}
						className='mt-6 items-center gap-4 bg-gradient-to-tr from-primary from-30% to-secondary text-xs font-bold'
					>
						{isPending && <Loader2 className='size-5 animate-spin' />}
						Gửi MÃ OTP
					</Button>
				</form>
			</Form>
		</FormWrapper>
	)
}

export default OTPForm
