'use client'

import * as _ from 'lodash'
import { Star } from 'lucide-react'
import { FC } from 'react'

import CampaignItem from '@/modules/auth/components/card/card'
import { ProductsSchema } from '@/modules/auth/schemas/card.schema'

import { PRODUCT_CATEGORY_DESCRIPTION } from '../../../../../category'

interface CampaignListProps {
	products: ProductsSchema
	selectedCategory: string
}

const CampaignList: FC<CampaignListProps> = ({
	products,
	selectedCategory
}) => {
	const filteredProducts =
		selectedCategory === PRODUCT_CATEGORY_DESCRIPTION.all || !selectedCategory
			? products
			: products.filter(product => product.category === selectedCategory)

	const productsData = _.groupBy(filteredProducts, product => product.category)

	return (
		<div className='container flex w-full flex-col gap-y-12 px-2 lg:px-8 lg:pt-10'>
			{_.keys(productsData).length === 0 ? (
				<div className='flex h-screen w-full items-center justify-center font-bold'>
					<div className='flex items-center gap-x-2 text-yellow-700'>
						<p>Danh mục này chưa có sản phẩm</p>
					</div>
				</div>
			) : (
				_.keys(productsData).map(category => {
					const products = productsData[category]

					if (products.length < 1) return null

					const Icon = Star

					return (
						<div
							key={category}
							className='flex flex-col gap-y-2'
						>
							<style jsx>{`
								@keyframes scaleAndSpin {
									0% {
										transform: scale(1) rotateY(-180deg);
									}
									50% {
										transform: scale(1.5) rotateY(0deg);
									}
									100% {
										transform: scale(1) rotateY(180deg);
									}
								}
							`}</style>
							<div className='flex items-center gap-x-2'>
								<h3 className='bg-gradient-to-tr from-primary from-30% to-secondary bg-clip-text text-center text-2xl font-bold uppercase text-transparent lg:text-left'>
									{Object.entries(PRODUCT_CATEGORY_DESCRIPTION).find(
										([_, value]) =>
											value.toLowerCase() === category.toLowerCase()
									)?.[1] || 'Danh mục không tồn tại'}
								</h3>
								<Icon
									className='ml-2 size-8 text-primary/95'
									style={{
										animation: 'scaleAndSpin 2s infinite ease-in-out'
									}}
									strokeWidth={3}
								/>
							</div>
							<div className='mt-[30px] grid grid-cols-2 place-items-center gap-24 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
								{products.map(product => (
									<CampaignItem
										key={product.id}
										product={product}
									/>
								))}
							</div>
						</div>
					)
				})
			)}
		</div>
	)
}

export default CampaignList
