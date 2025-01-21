import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import RegisterForm from '@/modules/auth/components/register/register-form'

export const metadata = {
	title: 'Đăng Ký'
} satisfies Metadata

const RegisterPage = () => {
	return (
		<div className='h-full w-[420px] items-center justify-center'>
			<div>
				<Image
					src='/logo.png'
					width={3148}
					height={1367}
					alt='logo'
					className='mb-[30px] ml-auto mr-auto w-36'
				/>
			</div>
			<div className=''>
				<RegisterForm />
			</div>
		</div>
	)
}

export default RegisterPage
