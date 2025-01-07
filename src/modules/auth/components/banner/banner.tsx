'use client'

import * as Avatar from '@radix-ui/react-avatar'
import React from 'react'

interface BannerProps {
	avatarUrl: string
	userName: string
}

const Banner: React.FC<BannerProps> = ({ avatarUrl, userName }) => {
	const handleLogout = () => {
		console.log('User logged out')
	}

	return (
		<div className='sticky top-0 z-20 ml-[-240px] flex items-center justify-evenly bg-primary text-white shadow-lg'>
			<div />
			<div className='ml-[210px] flex items-center gap-4'>
				<Avatar.Root className='inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-gray-200'>
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
					<p className='text-lg font-semibold'>{userName}</p>
				</div>
				<button
					onClick={handleLogout}
					className='rounded-lg bg-white px-4 py-2 text-[13px] font-bold text-black transition-colors'
				>
					Log Out
				</button>
			</div>
		</div>
	)
}

export default Banner
