'use client'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import {
	Sidebar,
	SidebarFooter,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem
} from '@/components/ui/sidebar'

const items = [
	{ title: 'Tất Cả', url: '' },
	{ title: 'Thẻ Tín Dụng', url: '' },
	{ title: 'Tài Khoản Thanh Toán', url: '' },
	{ title: 'Tuyển Dụng', url: '' },
	{ title: 'Vay Tín Chấp', url: '' }
]

const AppSidebar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(prev => !prev)

	return (
		<Sidebar className='fixed z-[48] flex min-h-screen w-64 flex-col justify-between bg-primary'>
			<div>
				<Link
					href='/campaign'
					target='_blank'
				>
					<Image
						src='/logo-negative.png'
						width={3148}
						height={1367}
						alt='logo'
						className='ml-[75px] mt-[8px] w-[100px]'
					/>
				</Link>
			</div>

			<div className='ml-[20px] mt-[45px] font-bold text-white'>
				<SidebarMenuItem>
					<SidebarMenuButton
						onClick={toggleMenu}
						className='flex items-center justify-between text-[16px]'
					>
						Chiến Dịch
						<span className='ml-2'>
							{menuOpen ? (
								<ChevronDown size={20} />
							) : (
								<ChevronRight size={20} />
							)}{' '}
						</span>
					</SidebarMenuButton>

					{menuOpen && (
						<SidebarMenuSub className='mt-2 pl-4 font-bold text-white'>
							{items.map(item => (
								<SidebarMenuSubItem key={item.title}>
									<SidebarMenuButton>{item.title}</SidebarMenuButton>
								</SidebarMenuSubItem>
							))}
						</SidebarMenuSub>
					)}
				</SidebarMenuItem>

				<SidebarMenuItem className='mt-2'>
					<SidebarMenuButton className='text-[16px]'>Báo Cáo</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem className='mt-2'>
					<SidebarMenuButton className='text-[16px]'>Sự kiện</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem className='mt-2'>
					<SidebarMenuButton className='text-[16px]'>Báo Lỗi</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem className='mt-2'>
					<SidebarMenuButton className='text-[16px]'>
						Hướng Dẫn
					</SidebarMenuButton>
				</SidebarMenuItem>
			</div>
			<SidebarFooter className='fixed bottom-0 left-0 w-[255px] bg-white text-[10px] font-bold text-primary'>
				<p className=''>Copyright © FIMI Tech Co., Ltd, all right reserved.</p>
			</SidebarFooter>
		</Sidebar>
	)
}

export default AppSidebar
