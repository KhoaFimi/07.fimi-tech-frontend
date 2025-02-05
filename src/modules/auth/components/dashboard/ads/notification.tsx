/* eslint-disable @next/next/no-img-element */
import { User } from 'lucide-react'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

const campaignData = [
	{
		id: 1,
		name: 'Chiến dịch A',
		score: 95,
		status: '500tr VNĐ',
		image: '/card/Contact.png'
	},
	{
		id: 2,
		name: 'Chiến dịch B',
		score: 88,
		status: '1,2 tỷ VNĐ',
		image: '/card/Product1.png'
	},
	{
		id: 3,
		name: 'Chiến dịch C',
		score: 76,
		status: '800tr VNĐ',
		image: '/card/Product2.png'
	},
	{
		id: 4,
		name: 'Chiến dịch D',
		score: 82,
		status: '750tr VNĐ',
		image: '/card/Tele.png'
	},
	{
		id: 5,
		name: 'Chiến dịch E',
		score: 82,
		status: '2,5 tỷ VNĐ',
		image: '/card/Contact.png'
	}
]

export default function Ads() {
	return (
		<div className='container mx-auto p-6'>
			<Carousel className='ml-5 mr-2'>
				<CarouselContent>
					{campaignData.map(campaign => (
						<CarouselItem
							key={campaign.id}
							className='md:basis-1/2 lg:basis-1/3'
						>
							<div className='rounded-lg border-[2px] border-gray-700 bg-white p-4 shadow-lg'>
								<img
									src={campaign.image}
									alt={campaign.name}
									className='mb-4 h-24 rounded-md object-cover'
								/>
								<h2 className='text-xl font-semibold'>{campaign.name}</h2>
								<div className='flex'>
									<User className='size-5' />
									<p>: Có {campaign.score} tham gia</p>
								</div>
								<p>Doanh Thu: {campaign.status}</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='ml-[10px]' />
				<CarouselNext className='mr-3' />
			</Carousel>{' '}
		</div>
	)
}
