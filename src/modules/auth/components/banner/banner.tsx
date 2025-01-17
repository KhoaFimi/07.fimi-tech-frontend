import * as Avatar from '@radix-ui/react-avatar'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

import { Command, CommandInput } from '@/components/ui/command'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { logout } from '@/modules/auth/actions/logout'

import { PRODUCT_CATEGORY_DESCRIPTION } from '../../../../../category'

interface BannerProps {
	avatarUrl: string
	userName: string
	onCategoryChange: (category: string) => void
	showSearch?: boolean
}

const Banner: React.FC<BannerProps> = ({
	avatarUrl,
	userName,
	onCategoryChange,
	showSearch = true
}) => {
	const [accessToken, setAccessToken] = useState<string | null>(null)
	const [, setError] = useState<string | undefined>(undefined)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const token = sessionStorage.getItem('accessToken')
			setAccessToken(token)
		}
	}, [])

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
			<div
				className={`ml-[-230px] flex items-center transition-opacity duration-300 ${
					showSearch ? 'visible opacity-100' : 'invisible opacity-0'
				}`}
			>
				<Command>
					<CommandInput placeholder='Tìm Kiếm Chiến Dịch' />
				</Command>
				<Select
					onValueChange={value => {
						const selectedCategory =
							PRODUCT_CATEGORY_DESCRIPTION[
								value as keyof typeof PRODUCT_CATEGORY_DESCRIPTION
							]
						onCategoryChange(selectedCategory)
					}}
				>
					<SelectTrigger className='h-[42px] w-[300px] text-black'>
						<SelectValue placeholder='Tất cả'></SelectValue>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{Object.keys(PRODUCT_CATEGORY_DESCRIPTION).map(key => (
								<SelectItem
									key={key}
									value={key}
								>
									{
										PRODUCT_CATEGORY_DESCRIPTION[
											key as keyof typeof PRODUCT_CATEGORY_DESCRIPTION
										]
									}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className='ml-[200px] flex items-center gap-4'>
				<Avatar.Root className='mb-[6px] mt-[6px] inline-flex h-[39px] w-[39px] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-gray-200'>
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
					<p className='text-[15px] font-semibold text-black'>{userName}</p>
				</div>

				<button
					disabled={isPending}
					onClick={onSubmit}
					className='h-[27px] w-[85px] rounded-lg bg-primary px-4 text-[14px] font-bold text-white transition-colors'
				>
					Log Out
				</button>
			</div>
		</div>
	)
}

export default Banner
