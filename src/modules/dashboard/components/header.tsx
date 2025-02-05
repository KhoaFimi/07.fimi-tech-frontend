'use client'

import { useMutation } from '@tanstack/react-query'
import { BellRing } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Avatar } from '@/components/ui/avatar'
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
import { NamePage } from '@/constant/enum'
import { logout } from '@/modules/auth/actions/logout'

const Header = () => {
	const pathName = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => setIsOpen(prev => !prev)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const { isPending, mutate: onLogout } = useMutation({
		mutationFn: async () => await logout(),
		onSuccess: data => {
			if (data?.error) {
				return data.error
			}
		}
	})

	const onSubmit = () => {
		onLogout()
	}

	return (
		<div className='sticky top-0 z-20 grid w-full grid-cols-8 gap-8 rounded-md border bg-white px-2 py-2 shadow-md'>
			<div className='col-span-2 flex items-center font-normal'>
				{pathName.split('/')[1] === ''
					? 'Trang chủ'
					: NamePage[pathName.split('/')[1] as keyof typeof NamePage]}
			</div>
			<div className='col-span-4 flex items-center justify-center gap-2'>
				<Command>
					<CommandInput
						placeholder='Tìm Kiếm '
						className='mt-1 h-[28px] w-[120px] text-black'
					/>
				</Command>
				<Select>
					<SelectTrigger className='h-[32px] w-[300px] text-black'>
						<SelectValue placeholder='Tất cả'></SelectValue>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value={'123'}>Danh mục 1</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className='relative col-span-2 flex items-center justify-center gap-2'>
				<div className='relative'>
					<button className='relative mt-[6px]'>
						<BellRing className='text-primary' />
					</button>
				</div>

				<div
					className='relative'
					ref={menuRef}
				>
					<Avatar
						className='h-[35px] w-[35px] cursor-pointer overflow-hidden rounded-full border-2 border-black bg-gray-200'
						onClick={toggleMenu}
						role='button'
					/>

					{isOpen && (
						<div className='absolute right-0 top-full z-50 mt-2 w-64 rounded-lg bg-white shadow-lg'>
							<Command>
								<CommandList>
									<CommandGroup heading='Suggestions'>
										<Link href='/profile'>
											<CommandItem>Hồ Sơ</CommandItem>
										</Link>
									</CommandGroup>
									<CommandSeparator />
									<CommandGroup heading='Settings'>
										<CommandItem>Hỗ Trợ</CommandItem>
										<Link
											href={''}
											onClick={onSubmit}
										>
											<CommandItem disabled={isPending}>Đăng Xuất</CommandItem>
										</Link>
									</CommandGroup>
								</CommandList>
							</Command>
						</div>
					)}
				</div>

				<div>
					<p className='text-[15px] font-semibold text-black'>FIMI11234</p>
				</div>
			</div>
		</div>
	)
}

export default Header
