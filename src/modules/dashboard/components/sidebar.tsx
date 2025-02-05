'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
	Sidebar,
	SidebarFooter,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider
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
		<SidebarProvider>
			<Sidebar className='fixed z-[48] flex min-h-screen w-56 flex-col justify-between bg-white/50'>
				<div>
					<Image
						src='/logo.png'
						width={3148}
						height={1367}
						alt='logo'
						className='ml-auto mr-auto mt-[8px] w-[100px]'
					/>
				</div>

				<div className='ml-[20px] mt-[45px] font-semibold text-foreground'>
					<SidebarMenuItem>
						<SidebarMenuButton className='flex items-center justify-between text-[16px]'>
							<Link href='/'>Trang chủ</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton className='mt-2 flex items-center justify-between text-[16px]'>
							<Link href='/campaign'>Chiến dịch</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem className='mt-2'>
						<Link href='/report'>
							<SidebarMenuButton className='text-[16px]'>
								Báo cáo
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
					<SidebarMenuItem className='mt-2'>
						<SidebarMenuButton className='text-[16px]'>
							Tin tức & sự kiện
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem className='mt-2'>
						<SidebarMenuButton className='text-[16px]'>
							Hướng dẫn
						</SidebarMenuButton>
					</SidebarMenuItem>

					{userLevel === 2 && (
						<>
							<SidebarMenuItem className='mt-2'>
								<SidebarMenuButton className='text-[16px]'>
									Quản lý
								</SidebarMenuButton>
							</SidebarMenuItem>
						</>
					)}
				</div>

				<SidebarFooter className='fixed bottom-0 left-0 w-56 bg-white text-center text-[8px] font-bold text-primary'>
					<p>Copyright © FIMI Tech Co., Ltd, all right reserved.</p>
				</SidebarFooter>
			</Sidebar>
		</SidebarProvider>
	)
}

export default AppSidebar
