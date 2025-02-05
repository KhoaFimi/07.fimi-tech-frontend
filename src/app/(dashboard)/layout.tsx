import { FC, PropsWithChildren } from 'react'

import Header from '@/modules/dashboard/components/header'
import AppSidebar from '@/modules/dashboard/components/sidebar'

const PagesLayout: FC<PropsWithChildren> = async ({ children }) => {
	return (
		<div className='flex w-full bg-slate-200'>
			<div className='h-screen w-1/6'>
				<AppSidebar />
			</div>
			<div className='flex flex-1 flex-col space-y-2 px-3 pb-7 pt-2'>
				<Header />
				<div className='flex-1'>{children}</div>
			</div>
		</div>
	)
}

export default PagesLayout
