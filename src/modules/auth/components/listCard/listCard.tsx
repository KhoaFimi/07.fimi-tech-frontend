/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import _ from 'lodash'
import {
	CircleDollarSign,
	CreditCard,
	DollarSign,
	HandCoins,
	Package,
	Users
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { PRODUCT_CATEGORY } from '@/constant/enum' // Import enum đúng

const ListCard: FC<{ products: Array<any> }> = ({ products }) => {
	// Hàm để chọn icon theo danh mục sản phẩm
	const pickIcon = (category: string) => {
		switch (category) {
			case PRODUCT_CATEGORY.creditCard:
				return CreditCard
			case PRODUCT_CATEGORY.all:
				return HandCoins
			case PRODUCT_CATEGORY.paymentAccount:
				return CircleDollarSign
			case PRODUCT_CATEGORY.recruitment:
				return Users
			default:
				return Package
		}
	}

	return (
		<div className='grid grid-cols-2 gap-20 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5'>
			{products.map(product => {
				const Icon = pickIcon(product.category)

				return (
					<Link
						key={product.id}
						href={`/campaign/${product.id}`}
						className='relative ml-[-15px] flex h-[240px] w-[150px] overflow-hidden rounded-xl border bg-white/80 shadow-lg'
					>
						<Image
							src={`/card/${product.show.image}`}
							alt={product.name}
							width={176}
							height={256}
							className='absolute z-0 ml-[9.3px] mt-[-3px] scale-x-110 object-contain'
						/>
						<div className='absolute inset-0 bottom-0 h-full w-full transition-all' />
						<div className='z-30 mt-auto flex h-1/4 w-full select-none flex-col gap-y-1 bg-white p-1 pt-2'>
							<p className='text-center text-[16px] font-medium leading-none tracking-tight'>
								{product.name}
							</p>
							<div className='flex items-center gap-x-0.5'></div>
							<div className='flex flex-col gap-y-1 pl-0.5'>
								<div className='flex items-center justify-center gap-x-0.5'>
									<DollarSign
										className='size-3'
										strokeWidth={3}
									/>
									<p className='left-9 text-[12px] font-semibold'>
										Hoa hồng:{' '}
										{product.show.commision ?? (
											<span className='underline'>Chi tiết</span>
										)}
									</p>
								</div>
							</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default ListCard
