'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2, ShieldCheck } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormError } from '@/components/form-response'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot
} from '@/components/ui/input-otp'
import { otp } from '@/modules/auth/actions/otp'
import { resetOtp } from '@/modules/auth/actions/reset-otp'
import { FormWrapper } from '@/modules/auth/components/form/form-wrapper'
import { OtpSchema, otpSchema } from '@/modules/auth/schemas/otp.schema'
import { ResetOtpSchema } from '@/modules/auth/schemas/resetOtp.schema'

const OTPForm = () => {
	const searchParams = useSearchParams()
	const [error, setError] = useState<string | undefined>(undefined)
	const [timer, setTimer] = useState(600)
	const [canResend, setCanResend] = useState(false)

	const form = useForm<OtpSchema>({
		resolver: zodResolver(otpSchema),
		defaultValues: {
			verificationKey: searchParams.get('key') ?? '',
			otp: ''
		}
	})

	const { isPending: isPendingOTP, mutate: onOTP } = useMutation({
		mutationFn: async (values: OtpSchema) => await otp(values),
		onSuccess: data => {
			if (data.error) {
				setError(data.error)
			}
		}
	})

	const { isPending: isPendingResend, mutate: onResendOTP } = useMutation({
		mutationFn: async (values: ResetOtpSchema) => {
			const body = {
				...values,
				verificationKey: searchParams.get('key') ?? ''
			}
			return await resetOtp(body)
		},
		onSuccess: data => {
			if (data?.error) {
				setError(data?.error)
			} else {
				setTimer(600)
			}
		}
	})

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer(prevTimer => prevTimer - 1)
			}, 10)
			return () => clearInterval(interval)
		} else {
			setCanResend(true)
		}
	}, [timer])

	const onSubmit = (values: OtpSchema) => {
		onOTP(values)
	}

	const reOnSubmit = (values: ResetOtpSchema) => {
		onResendOTP(values)
	}

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
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						name='otp'
						control={form.control}
						render={({ field }) => (
							<InputOTP
								maxLength={6}
								className='flex flex-col items-center justify-center'
								{...field}
								disabled={isPendingOTP}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
						)}
					/>

					<FormError message={error} />

					<Button
						type='submit'
						size='sm'
						disabled={isPendingOTP}
						className='mt-6 items-center gap-4 bg-gradient-to-tr from-primary from-30% to-secondary text-xs font-bold'
					>
						{isPendingOTP && <Loader2 className='size-5 animate-spin' />}
						Gửi MÃ OTP
					</Button>

					{canResend ? (
						<Button
							onSubmit={form.handleSubmit(reOnSubmit)}
							type='button'
							disabled={isPendingResend}
						>
							{isPendingResend ? (
								<Loader2 className='size-4 animate-spin' />
							) : (
								'Gửi Lại OTP'
							)}
						</Button>
					) : (
						<p>
							Gửi lại OTP sau {Math.floor(timer / 60)}:
							{String(timer % 60).padStart(2, '0')}
						</p>
					)}
				</form>
			</Form>
		</FormWrapper>
	)
}

export default OTPForm
