'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { SidebarProvider } from '@/components/ui/sidebar'
import { mockReportData } from '@/mockdata'
import { getCampaignCode } from '@/modules/auth/actions/get-campaign-code'
import { role } from '@/modules/auth/actions/role'
import Banner from '@/modules/auth/components/banner/banner'
import ManagmentReport from '@/modules/auth/components/report/index'
import Example from '@/modules/auth/components/report/report1-panel'
import AppSidebar from '@/modules/auth/components/sidebar/sidebar'

const initialData = [
	{ id: '0', label: 'vpbstepup', value: 'vpbstepup' },
	{ id: '1', label: 'vpblady', value: 'vpblady' },
	{ id: '2', label: 'vpbgenz', value: 'vpbgenz' },
	{ id: '3', label: 'vpbmc2', value: 'vpbmc2' },
	{ id: '4', label: 'vpbvna', value: 'vpbvna' },
	{ id: '5', label: 'tpbevo', value: 'tpbevo' },
	{ id: '6', label: 'hdbvjp', value: 'hdbvjp' },
	{ id: '7', label: 'hdb4in1', value: 'hdb4in1' },
	{ id: '8', label: 'muadee', value: 'muadee' },
	{ id: '9', label: 'vibtra', value: 'vibtra' },
	{ id: '10', label: 'vibsup', value: 'vibsup' },
	{ id: '11', label: 'vibpre', value: 'vibpre' },
	{ id: '12', label: 'vibrew', value: 'vibrew' },
	{ id: '13', label: 'vibcas', value: 'vibcas' },
	{ id: '14', label: 'vibfam', value: 'vibfam' },
	{ id: '15', label: 'vibfin', value: 'vibfin' },
	{ id: '16', label: 'vpbankneo', value: 'vpbankneo' }
]

const ReportPage = () => {
	const { data: campaignData } = useQuery({
		queryKey: ['campaign-codes'],
		queryFn: getCampaignCode,
		initialData
	})

	const [userId, setUserId] = useState<string | null>(null)
	const [, setSelectedCategory] = useState<string | null>(null)
	const handleCategoryChange = (value: string) => {
		setSelectedCategory(value)
	}
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const token = sessionStorage.getItem('accessToken')
			if (token) {
				role(token).then(response => {
					if (response.id !== undefined) {
						setUserId(response.id)
					}
				})
			}
		}
	}, [])

	return (
		<div className='relative flex h-screen w-screen overflow-hidden'>
			<SidebarProvider>
				<AppSidebar />
				<div className='flex flex-1 flex-col'>
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
						<div className='mt-4 flex justify-end'>
							<Button
								variant='outline'
								className='border-[3px] border-black hover:bg-primary'
							>
								Xuất Bản
							</Button>
						</div>
						<div className='mt-[40px] flex flex-col space-y-12'>
							<ManagmentReport
								publisherCode={userId!}
								campaignData={campaignData ?? []}
								data={mockReportData}
								isPending={false}
								refetch={() => Promise.reject('Function not implemented')}
							/>
						</div>
					</div>
				</div>
			</SidebarProvider>
		</div>
	)
}

export default ReportPage
