/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Banner from '@/modules/auth/components/banner/banner'
import Example from '@/modules/auth/components/report/report1-panel'
import AppSidebar from '@/modules/auth/components/sidebar/sidebar'

const DashboardPage = () => {
	const [, setSelectedCategory] = useState<string | null>(null)
	const handleCategoryChange = (value: string) => {
		setSelectedCategory(value)
	}

	return (
		<div className='relative flex h-screen w-screen overflow-hidden'>
			<SidebarProvider>
				<AppSidebar />
				<div className='flex-1 flex-col'>
					<div className='fixed left-0 top-0 z-40 w-full md:left-[243px]'>
						<Banner
							avatarUrl='/card/anhDaiDien.jfif'
							userName='Đăng Khoa'
							onCategoryChange={handleCategoryChange}
							showSearch={false}
						/>
					</div>
					<div className='mt-16 flex-1 overflow-y-auto pr-6 pt-4'>
						<Example />
					</div>

					<div className='mt-9 pr-5'>
						<Tabs
							defaultValue='event'
							className='w-full'
						>
							<TabsList>
								<TabsTrigger value='event'>Sự kiện</TabsTrigger>
								<TabsTrigger value='rank'>Chiến dịch</TabsTrigger>
							</TabsList>
							<TabsContent value='event'>
								<div className='flex space-x-4'>
									<Card className='flex w-1/2 overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
										<div className='w-1/2 bg-white p-4 sm:p-6'>
											<time
												dateTime='2022-10-10'
												className='block text-xs text-gray-500'
											>
												10th Oct 2022
											</time>
											<h3 className='mt-0.5 text-lg text-gray-900'>
												How to position your furniture for positivity
											</h3>
											<span className='mt-2 text-sm text-gray-500'>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Recusandae dolores, possimus pariatur animi
												temporibus
											</span>
										</div>
										<div className='w-1/2'>
											<img
												src='/card/ThuongMai.png'
												alt='Furniture positioning'
												className='h-full w-full object-cover'
											/>
										</div>
									</Card>

									<Card className='flex w-1/2 overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
										<div className='w-1/2 bg-white p-4 sm:p-6'>
											<time
												dateTime='2022-10-10'
												className='block text-xs text-gray-500'
											>
												10th Oct 2022
											</time>
											<h3 className='mt-0.5 text-lg text-gray-900'>
												How to position your furniture for positivity
											</h3>
											<span className='mt-2 text-sm text-gray-500'>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Recusandae dolores, possimus pariatur animi
												temporibus
											</span>
										</div>
										<div className='w-1/2'>
											<img
												src='/card/ThuongMai.png'
												alt='Furniture positioning'
												className='h-full w-full object-cover'
											/>
										</div>
									</Card>
								</div>
							</TabsContent>
							<TabsContent value='rank'></TabsContent>
						</Tabs>
					</div>
				</div>
			</SidebarProvider>
		</div>
	)
}

export default DashboardPage
