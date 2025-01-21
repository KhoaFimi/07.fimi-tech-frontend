import * as Avatar from '@radix-ui/react-avatar'
import { useMutation } from '@tanstack/react-query'
import { BellRing } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { PRODUCT_CATEGORY_DESCRIPTION } from '@/category'
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator
} from '@/components/ui/command'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { logout } from '@/modules/auth/actions/logout'

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
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(prev => !prev)

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
		<div className='sticky top-0 z-20 ml-[-23px] flex items-center justify-evenly bg-white text-white shadow-xl'>
			<div
				className={`ml-[-200px] flex items-center transition-opacity duration-300 ${
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
			<div className='ml-[30px] flex items-center gap-4'>
				<button>
					<BellRing className='size-7 text-yellow-600'></BellRing>
				</button>
				<Avatar.Root className='mb-[6px] mt-[6px] inline-flex h-[35px] w-[35px] items-center justify-center overflow-hidden rounded-full border-2 border-black bg-gray-200'>
					<Avatar.Image
						className='h-full w-full cursor-pointer object-cover transition-transform duration-300 ease-in-out hover:scale-110'
						src={avatarUrl}
						alt={`${userName}'s Avatar`}
						onClick={toggleMenu}
					/>
					{isOpen && (
						<div className='absolute right-0 z-10 mr-[300px] mt-[218px] w-64 rounded-lg bg-white shadow-lg'>
							<Command>
								<CommandList>
									<CommandGroup heading='Suggestions'>
										<CommandItem>Hồ Sơ</CommandItem>
									</CommandGroup>
									<CommandSeparator />
									<CommandGroup heading='Settings'>
										<CommandItem>Hỗ Trợ</CommandItem>
										<CommandItem>Cài Đặt</CommandItem>
									</CommandGroup>
								</CommandList>
							</Command>
						</div>
					)}
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
