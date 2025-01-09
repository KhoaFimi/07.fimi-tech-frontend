import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { z } from 'zod'

import OTPForm from '@/modules/auth/components/otp/otp-form'

export const metadata = {
	title: 'Xác Thực OTP'
} satisfies Metadata

const searchParamsSchema = z.object({ key: z.string() })
type SearchParams = Promise<z.infer<typeof searchParamsSchema>>
interface InputOTPPageProps {
	searchParams: SearchParams
}

const InputOTPPage: FC<InputOTPPageProps> = async ({ searchParams }) => {
	const { key } = searchParamsSchema.parse(await searchParams)
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
			<div className='mb-40'>
				<OTPForm key={key} />
			</div>
		</div>
	)
}

export default InputOTPPage
