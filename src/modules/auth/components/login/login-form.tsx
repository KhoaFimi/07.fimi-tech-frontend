/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, LockKeyhole, User } from 'lucide-react'
import Link from 'next/link'
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
import { FormWrapper } from '@/modules/auth/components/form/form-wrapper'
import { LoginSchema, loginSchema } from '@/modules/auth/schemas/login.schema'

const LoginForm = () => {
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
		<FormWrapper title='Đăng nhập'>
			<Form {...form}>
				<form
					autoComplete='autocomplete_off_randString'
					className='mx-auto flex w-full max-w-md flex-col gap-2.5 px-4 pt-4' // Adjusted max-width and centering
				>
					<FormField
						name='phoneOrEmail'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
									<User
										className='size-3'
										strokeWidth={3}
									/>
									<p className='leading-none'>Email / Số điện thoại</p>
								</FormLabel>
								<FormControl>
									<Input
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
							name='password'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
										<LockKeyhole
											className='size-3'
											strokeWidth={3}
										/>
										<p className='leading-none tracking-tight'>Mật khẩu</p>
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
						<Link href='/forgot-password'>
							<p className='text-right text-xs/3 font-medium text-primary/50 transition-all duration-150 ease-out hover:text-primary hover:underline'>
								Quên mật khẩu
							</p>
						</Link>
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

			<p className='px-2 py-2.5 text-center text-xs'>
				Bạn chưa có mã giới thiệu{' '}
				<span className='font-semibold text-primary transition hover:underline'>
					<Link href={'/register'}>Đăng ký</Link>
				</span>
			</p>
		</FormWrapper>
	)
}

export default LoginForm
