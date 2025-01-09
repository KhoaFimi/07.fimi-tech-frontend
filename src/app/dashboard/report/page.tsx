/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {
	QueryObserverResult,
	RefetchOptions,
	useQuery
} from '@tanstack/react-query'
import React, { FC } from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import { getCampaignCode } from '@/modules/auth/actions/get-campaign-code'
import Banner from '@/modules/auth/components/banner/banner'
import ManagmentReport from '@/modules/auth/components/report/index'
import ReportPanel from '@/modules/auth/components/report/report-panel'
import AppSidebar from '@/modules/auth/components/sidebar/sidebar'
import { ReportResponse } from '@/types'

interface ReportScreenProps {
	publisherCode: string
}
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

const defaultOrder = {
	total: 0,
	amOrder: 0,
	pubOrder: 0,
	approved: 0,
	rejected: 0,
	pending: 0
}

const defaultCommision = {
	pub: 0,
	am: 0,
	total: 0,
	remain: 0,
	paid: 0
}

const ReportPage: FC<ReportScreenProps> = ({ publisherCode }) => {
	const { data: campaignData } = useQuery({
		queryKey: ['campaign-codes'],
		queryFn: getCampaignCode,
		initialData
	})
	return (
		<div className='relative flex h-screen w-screen overflow-hidden'>
			<SidebarProvider>
				<AppSidebar />
				<div className='flex flex-1 flex-col'>
					<div className='fixed left-0 top-0 z-40 w-full md:left-[243px]'>
						<Banner
							avatarUrl='/card/anhDaiDien.jfif'
							userName='Đăng Khoa'
						/>
					</div>
					<div className='mt-12 flex-1 overflow-y-auto p-4 md:ml-[10px]'>
						<div className='flex flex-col space-y-12'>
							<ReportPanel
								order={{
									...defaultOrder
								}}
								commision={{
									...defaultCommision
								}}
							/>
							<ManagmentReport
								publisherCode={publisherCode}
								campaignData={campaignData ?? []}
								data={[]}
								isPending={false}
								refetch={function (
									options?: RefetchOptions
								): Promise<QueryObserverResult<ReportResponse, Error>> {
									throw new Error('Function not implemented.')
								}}
							/>
						</div>
					</div>
				</div>
			</SidebarProvider>
		</div>
	)
}

export default ReportPage
