import { ChartBarIncreasing, Handshake, MapPinCheck, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Stats = () => {
	return (
		<div className='space-y-6 p-1'>
			<div className='grid h-40 w-full grid-cols-1 gap-10 md:grid-cols-4'>
				<Card className='flex transform flex-col border-[3px] border-black shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
					<CardHeader>
						<Handshake className='h-8 w-8' />
						<CardTitle className='pt-5'>Khách Hàng</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-4xl font-semibold'>250K</p>
					</CardContent>
				</Card>

				<Card className='flex transform flex-col items-start border-[3px] border-black shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
					<CardHeader>
						<MapPinCheck className='h-8 w-8' />
						<CardTitle className='pt-5'>Tỉnh Thành</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-4xl font-semibold'>63</p>
					</CardContent>
				</Card>

				<Card className='flex transform flex-col items-start border-[3px] border-black shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
					<CardHeader>
						<ChartBarIncreasing className='h-8 w-8' />
						<CardTitle className='pt-5'>Doanh Số</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-4xl font-semibold'>1,200 Tỷ</p>
					</CardContent>
				</Card>

				<Card className='flex transform flex-col items-start border-[3px] border-black shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
					<CardHeader>
						<Users className='h-8 w-8' />
						<CardTitle className='pt-5'>Nhân Sự </CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-4xl font-semibold'>6,500</p>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Stats
