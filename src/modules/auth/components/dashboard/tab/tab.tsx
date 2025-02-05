/* eslint-disable @next/next/no-img-element */
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Ads from '@/modules/auth/components/dashboard/ads/notification'

const tab = () => {
	return (
		<Tabs
			defaultValue='event'
			className='w-full'
		>
			<TabsList>
				<TabsTrigger value='event'>Sự kiện</TabsTrigger>
				<TabsTrigger value='rank'>Chiến dịch</TabsTrigger>
			</TabsList>
			<TabsContent value='event'>
				<div className='grid grid-cols-2 gap-4'>
					<Card className='flex overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
						<div className='w-1/2 bg-white sm:p-2'>
							<time
								dateTime='2022-10-10'
								className='block text-xs text-gray-500'
							>
								10th Oct 2022
							</time>
							<h3 className='mt-0.5 text-sm text-gray-900'>
								How to position your furniture for positivity
							</h3>
							<span className='mt-1 text-xs text-gray-500'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Recusandae dolores, possimus pariatur animi temporibus
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

					<Card className='flex overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
						<div className='w-1/2 bg-white sm:p-2'>
							<time
								dateTime='2022-10-10'
								className='block text-xs text-gray-500'
							>
								10th Oct 2022
							</time>
							<h3 className='mt-0.5 text-sm text-gray-900'>
								How to position your furniture for positivity
							</h3>
							<span className='mt-1 text-xs text-gray-500'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Recusandae dolores, possimus pariatur animi temporibus
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

					<Card className='flex overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
						<div className='w-1/2 bg-white sm:p-2'>
							<time
								dateTime='2022-10-10'
								className='block text-xs text-gray-500'
							>
								10th Oct 2022
							</time>
							<h3 className='mt-0.5 text-sm text-gray-900'>
								How to position your furniture for positivity
							</h3>
							<span className='mt-1 text-xs text-gray-500'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Recusandae dolores, possimus pariatur animi temporibus
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

					<Card className='flex overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
						<div className='w-1/2 bg-white sm:p-2'>
							<time
								dateTime='2022-10-10'
								className='block text-xs text-gray-500'
							>
								10th Oct 2022
							</time>
							<h3 className='mt-0.5 text-sm text-gray-900'>
								How to position your furniture for positivity
							</h3>
							<span className='mt-1 text-xs text-gray-500'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Recusandae dolores, possimus pariatur animi temporibus
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
			<TabsContent value='rank'>
				<Ads />
			</TabsContent>
		</Tabs>
	)
}
export default tab
