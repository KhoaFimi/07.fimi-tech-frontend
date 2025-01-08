import { ChevronDown, ChevronRight } from 'lucide-react' // Thêm import các icon
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
		<Sidebar className='fixed z-[48] flex min-h-screen w-64 flex-col justify-between'>
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
						className='ml-[8px] mt-[12px] w-[70px]'
					/>
				</Link>
			</div>

			<div className='mt-[20px] font-bold text-primary'>
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
						<SidebarMenuSub className='mt-2 pl-4'>
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
			<SidebarFooter className='mt-[375px] bg-primary text-[11px] font-bold text-white'>
				<p>Copyright © FIMI Tech Co., Ltd, all right reserved.</p>
			</SidebarFooter>
		</Sidebar>
	)
}

export default AppSidebar
