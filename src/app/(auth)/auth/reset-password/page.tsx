import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'

import ResetPassword from '@/modules/auth/components/reset-password/reset-password-form'

export const metadata = {
	title: 'Đổi mật khẩu'
} satisfies Metadata

const ResetPasswordPage = () => {
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
						className='mb-[80px] ml-auto mr-auto w-36'
					/>
				</Link>
			</div>
			<div className='mb-20'>
				<Suspense>
					{' '}
					<ResetPassword />
				</Suspense>
			</div>
		</div>
	)
}

export default ResetPasswordPage
