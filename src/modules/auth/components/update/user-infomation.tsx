'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { FormError } from '@/components/form-response'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { role } from '@/modules/auth/actions/role'
import { updateUser } from '@/modules/auth/actions/update-infomation'
import AvatarUploader from '@/modules/auth/components/update/avartar'
import { UserSchema, userSchema } from '@/modules/auth/schemas/user.schema'

const UpdateUser = () => {
	const [error, setError] = useState<string | undefined>(undefined)
	const [userId, setUserId] = useState<string | undefined>(undefined)
	const [, setAvatarFile] = useState<File | null>(null)
	const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

	const form = useForm<UserSchema>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			fullname: '',
			email: '',
			phone: '',
			profile: {
				dateOfBirth: '',
				placeOfBirth: '',
				gender: 'MALE',
				workAt: '',
				currentAddress: {
					detail: '',
					ward: '',
					district: '',
					province: ''
				},
				bank: {
					accountName: '',
					accountNumber: '',
					name: ''
				}
			}
		}
	})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const token = sessionStorage.getItem('accessToken')

			if (token) {
				role(token).then(response => {
					if (response.data != undefined) {
						const user = response.data.user
						setUserId(user.id)
						form.reset({
							fullname: user.fullname || '',
							email: user.email || '',
							phone: user.phone || '',
							profile: {
								dateOfBirth: user.profile.dateOfBirth || '',
								placeOfBirth: user.placeOfBirth || '',
								gender: user.gender || 'MALE',
								workAt: user.workAt || '',
								currentAddress: {
									detail: user.currentAddress?.detail || '',
									ward: user.currentAddress?.ward || '',
									district: user.currentAddress?.district || '',
									province: user.currentAddress?.province || ''
								},
								bank: {
									accountName: user.bank?.accountName || '',
									accountNumber: user.bank?.accountNumber || '',
									name: user.bank?.name || ''
								}
							}
						})

						if (user.avatar) {
							setAvatarUrl(user.avatar ?? undefined)
						}
					}
				})
			}
		}
	}, [form])

	const { isPending, mutate: onUpdate } = useMutation({
		mutationFn: async (values: UserSchema) => {
			if (!userId) {
				throw new Error('User ID is missing')
			}
			const response = await updateUser(values, userId)
			return response
		},
		onSuccess: data => {
			if (data?.error) {
				setError(data.error)
			}
		}
	})

	const handleImageChange = (file: File | null) => {
		setAvatarFile(file)
	}

	const onSubmit = (values: UserSchema) => {
		onUpdate(values)
	}

	return (
		<Form {...form}>
			<form
				className='mx-auto max-w-4xl space-y-6 rounded-lg border-2 bg-white p-6 shadow-xl'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<AvatarUploader
					initialImage={avatarUrl ?? undefined}
					onImageChange={handleImageChange}
				/>

				<div className='flex flex-wrap items-center gap-6'>
					<FormField
						name='email'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										readOnly
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						name='phone'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Số điện thoại</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										readOnly
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className='flex flex-wrap items-center gap-6'>
					<FormField
						name='fullname'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Họ và tên</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						name='profile.dateOfBirth'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Ngày sinh</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										type='date'
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						name='profile.gender'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Giới tính</FormLabel>
								<FormControl>
									<select
										{...field}
										className='h-8 w-full rounded-md border-gray-400 focus:border-primary focus:ring-primary'
									>
										<option value='MALE'>Nam</option>
										<option value='FEMALE'>Nữ</option>
									</select>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className='flex flex-wrap items-center gap-6'>
					<FormField
						name='profile.currentAddress.detail'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Địa chỉ</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className='flex flex-wrap items-center gap-6'>
					<FormField
						name='profile.currentAddress.ward'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Thành phố</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						name='profile.currentAddress.district'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Quận</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						name='profile.currentAddress.province'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Phường</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className='flex flex-wrap items-center gap-6'>
					<FormField
						name='profile.bank.accountName'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Tên tài khoản</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						name='profile.bank.accountNumber'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Số tài khoản</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						name='profile.bank.name'
						control={form.control}
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel>Tên ngân hàng</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<FormError message={error} />
				<div className='mt-6 flex justify-end gap-4'>
					<Button
						variant='outline'
						type='button'
					>
						Huỷ bỏ
					</Button>
					<Button
						disabled={isPending}
						type='submit'
						className='bg-primary text-white'
					>
						{isPending && <Loader2 className='size-5 animate-spin' />}
						Lưu
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default UpdateUser
