'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { ProductSchema } from '@/modules/auth/schemas/card.schema'

const CampaignItem: FC<{ product: ProductSchema }> = ({ product }) => {
	return (
		<Link
			href={`/campaign/${product.id}`}
			className='relative flex h-[256px] w-[148px] overflow-hidden rounded-xl border bg-white/80 shadow'
		>
			<Image
				src={`/card/${product.show.image}`}
				alt={product.show.image}
				width={176}
				height={256}
				className='absolute z-0 object-contain'
			/>
			<div className='absolute inset-0 bottom-0 h-full w-full transition-all' />

			<div className='z-30 mt-auto flex h-[31%] w-full select-none flex-col items-center gap-y-1 bg-white p-1 pt-2'>
				<p className='truncate text-[16px] font-semibold leading-none tracking-tight'>
					{product.name}
				</p>

				<div className='mt-1 flex flex-col items-center gap-y-1 pl-0.5'>
					<div className='flex items-center gap-x-0.5'>
						<p className='text-[14px] font-normal'>
							Hoa hồng:{' '}
							{product.show.commision ?? (
								<span className='underline'>Chi tiết</span>
							)}
						</p>
					</div>
					<p className='truncate text-[14px] font-normal leading-none tracking-tight'>
						CRV : {product.show.commision}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default CampaignItem
