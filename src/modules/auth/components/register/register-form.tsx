'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2, Lock, LockKeyhole, Mail, Phone, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormError } from '@/components/form-response'
import PolicyButton from '@/components/policies/policy-button'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSercurityPolicyStore } from '@/hooks/use-sercurity-policy-store'
import { useTermPolicyStore } from '@/hooks/use-term-policy-store'
import { useUserPolicyStore } from '@/hooks/use-user-policy-store'
import { register } from '@/modules/auth/actions/register'
import { FormWrapper } from '@/modules/auth/components/form/form-wrapper'
import {
	RegisterSchema,
	registerSchema
} from '@/modules/auth/schemas/register.shema'

const RegisterForm = () => {
	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			fullname: '',
			email: '',
			phone: '',
			password: '',
			rePassword: '',
			tnc: true
		}
	})
	const [error, setError] = useState<string | undefined>(undefined)
	const { onOpen: onOpenSercutiryPolicy } = useSercurityPolicyStore()
	const { onOpen: onOpenTermPolicy } = useTermPolicyStore()
	const { onOpen: onOpenUserPolicy } = useUserPolicyStore()
	const { isPending, mutate: onRegister } = useMutation({
		mutationFn: async (values: RegisterSchema) => await register(values),
		onSuccess: data => {
			if (data.error) {
				setError(data.error)
			}
		}
	})

	const onSubmit = (values: RegisterSchema) => {
		onRegister(values)
	}

	return (
		<FormWrapper title='Đăng Ký'>
			<Form {...form}>
				<form
					autoComplete='autocomplete_off_randString'
					className='mx-auto flex w-full max-w-md flex-col gap-2.5 px-4 pt-1'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						name='fullname'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
									<User
										className='size-3'
										strokeWidth={3}
									/>
									<p className='leading-none'>Họ Và Tên</p>
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
					<FormField
						name='email'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
									<Mail
										className='size-3'
										strokeWidth={3}
									/>
									<p className='leading-none'>Email </p>
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
					<FormField
						name='phone'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
									<Phone
										className='size-3'
										strokeWidth={3}
									/>
									<p className='leading-none'> Số điện thoại</p>
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
										<Lock
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
						<FormField
							name='rePassword'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel className='flex items-start space-x-1 text-xs font-semibold tracking-tight text-foreground/80'>
										<LockKeyhole
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
						<Link href='/auth/forgot-password'>
							<p className='text-right text-xs/3 font-medium text-primary/50 transition-all duration-150 ease-out hover:text-primary hover:underline'>
								Quên mật khẩu
							</p>
						</Link>
						<FormField
							name='tnc'
							control={form.control}
							render={({ field }) => (
								<FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border border-primary bg-background p-2 shadow'>
									<FormControl>
										<Checkbox
											checked={field.value}
											disabled={isPending}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className='select-none space-y-1 leading-3'>
										<FormDescription className='cursor-pointer text-justify text-xs font-medium'>
											Bằng việc cung cấp thông tin, bạn đã đồng ý với{' '}
											<PolicyButton onOpen={onOpenSercutiryPolicy}>
												Điều khoản sử dụng dịch vụ FIMI
											</PolicyButton>
											,{' '}
											<PolicyButton onOpen={onOpenTermPolicy}>
												Chính sách bảo vệ dữ liệu cá nhân
											</PolicyButton>{' '}
											và{' '}
											<PolicyButton onOpen={onOpenUserPolicy}>
												Thông báo bảo mật của chúng tôi
											</PolicyButton>
											.
										</FormDescription>
									</div>
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />

					<Button
						type='submit'
						size='sm'
						disabled={isPending}
						onClick={form.handleSubmit(onSubmit)}
						className='items-center gap-4 bg-gradient-to-tr from-primary from-30% to-secondary text-xs font-bold'
					>
						{isPending && <Loader2 className='size-5 animate-spin' />}
						Đăng Ký
					</Button>
				</form>
			</Form>

			<p className='px-2 py-2.5 text-center text-xs'>
				Bạn đã có tài khoản{' '}
				<span className='font-semibold text-primary transition hover:underline'>
					<Link href={'/auth/login'}>Đăng nhập </Link>
				</span>
			</p>
		</FormWrapper>
	)
}

export default RegisterForm
