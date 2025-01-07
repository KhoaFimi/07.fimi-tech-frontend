import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ForgotPasswordForm from '@/modules/auth/components/forgot-password/forgot-password-form'

export const metadata = {
	title: 'Quên Mật Khẩu'
} satisfies Metadata

const LoginPage = () => {
	return (
		<div className='h-full w-[420px] items-center justify-center'>
			<div>
				<Link
					href='/campaign'
					target='_blank'
				>
					<Image
						src='/logo.png'
						width={3148}
						height={1367}
						alt='logo'
						className='mb-[40px] ml-auto mr-auto w-36'
					/>
				</Link>
			</div>
			<div className='mb-20'>
				<ForgotPasswordForm />
			</div>
		</div>
	)
}

export default LoginPage
