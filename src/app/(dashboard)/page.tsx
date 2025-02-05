'use client'

import Tab from '@/modules/auth/components/dashboard/tab/tab'
import HomeReport from '@/modules/auth/components/report/home-report'

const DashboardPage = () => {
	return (
		<div className='relative flex h-screen justify-center'>
			<div className='flex-1 flex-col'>
				<div className='fixed left-0 top-0 z-40 w-full md:left-[243px]'></div>
				<div className='mt-6 overflow-y-auto'>
					<HomeReport />
				</div>
				<div className='mt-6 overflow-y-auto'>
					<Tab />
				</div>
			</div>
		</div>
	)
}

export default DashboardPage
