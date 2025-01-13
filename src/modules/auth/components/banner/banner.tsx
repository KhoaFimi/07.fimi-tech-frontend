'use client'

import * as Avatar from '@radix-ui/react-avatar'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'

import { logout } from '@/modules/auth/actions/logout'

interface BannerProps {
	avatarUrl: string
	userName: string
}

const Banner: React.FC<BannerProps> = ({ avatarUrl, userName }) => {
	const accessToken = sessionStorage.getItem('accessToken')
	const [, setError] = useState<string | undefined>(undefined)
	const { isPending, mutate: onLogout } = useMutation({
		mutationFn: async () => await logout(accessToken),
		onSuccess: data => {
			if (data.error) {
				setError(data.error)
			}
		}
	})

	const onSubmit = () => {
		onLogout()
	}

	return (
		<div className='sticky top-0 z-20 ml-[12px] flex items-center justify-evenly bg-white text-white shadow-xl'>
			<div />
			<div className='ml-[220px] flex items-center gap-4'>
				<Avatar.Root className='mb-[6px] mt-[6px] inline-flex h-[37px] w-[37px] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-gray-200'>
					<Avatar.Image
						className='h-full w-full object-cover'
						src={avatarUrl}
						alt={`${userName}'s Avatar`}
					/>
					<Avatar.Fallback
						className='flex h-full w-full items-center justify-center bg-gray-400 text-white'
						delayMs={600}
					>
						{userName.charAt(0).toUpperCase()}
					</Avatar.Fallback>
				</Avatar.Root>
				<div>
					<p className='text-[14px] font-semibold text-black'>{userName}</p>
				</div>
				<button
					disabled={isPending}
					onClick={onSubmit}
					className='h-[25px] w-[80px] rounded-lg bg-primary px-4 text-[12px] font-bold text-white transition-colors'
				>
					Log Out
				</button>
			</div>
		</div>
	)
}

export default Banner
