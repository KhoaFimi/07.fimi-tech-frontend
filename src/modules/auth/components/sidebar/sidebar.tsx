'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
	Sidebar,
	SidebarFooter,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar'
import { role } from '@/modules/auth/actions/role'

const AppSidebar = () => {
	const [userLevel, setUserLevel] = useState<number | null>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const token = sessionStorage.getItem('accessToken')
			if (token) {
				role(token).then(response => {
					if (response.level !== undefined) {
						setUserLevel(response.level)
					}
				})
			}
		}
	}, [])

	return (
		<Sidebar className='fixed z-[48] flex min-h-screen w-56 flex-col justify-between bg-primary'>
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
						className='ml-auto mr-auto mt-[8px] w-[100px]'
					/>
				</Link>
			</div>

			<div className='ml-[20px] mt-[45px] font-bold text-white'>
				<SidebarMenuItem>
					<SidebarMenuButton className='flex items-center justify-between text-[16px]'>
						<Link href='/dashboard/dashboard'>Trang Chủ</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>

				<SidebarMenuItem>
					<SidebarMenuButton className='mt-2 flex items-center justify-between text-[16px]'>
						<Link href='/dashboard/campaign'>Chiến Dịch</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>

				<SidebarMenuItem className='mt-2'>
					<Link href='/dashboard/report'>
						<SidebarMenuButton className='text-[16px]'>
							Báo Cáo
						</SidebarMenuButton>
					</Link>
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

				{userLevel === 2 && (
					<>
						<SidebarMenuItem className='mt-2'>
							<SidebarMenuButton className='text-[16px]'>
								Quản Lý
							</SidebarMenuButton>
						</SidebarMenuItem>
					</>
				)}
			</div>

			<SidebarFooter className='fixed bottom-0 left-0 w-[240px] bg-white text-[9px] font-bold text-primary'>
				<p>Copyright © FIMI Tech Co., Ltd, all right reserved.</p>
			</SidebarFooter>
		</Sidebar>
	)
}

export default AppSidebar
