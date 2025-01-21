import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import LoginForm from '@/modules/auth/components/login/login-form'

export const metadata = {
	title: 'Đăng nhập'
} satisfies Metadata

const LoginPage = () => {
	return (
		<div className='h-full w-[420px] items-center justify-center'>
			<div>
				<Image
					src='/logo.png'
					width={3148}
					height={1367}
					alt='logo'
					className='mb-[80px] ml-auto mr-auto w-36'
				/>
			</div>
			<div className='mb-20'>
				<LoginForm />
			</div>
		</div>
	)
}

export default LoginPage
