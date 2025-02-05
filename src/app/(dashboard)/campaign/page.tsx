'use client'

import { useState } from 'react'

import products from '@/campain'
import ListCard from '@/modules/auth/components/listCard/listCard'

const Campain = () => {
	const [selectedCategory] = useState<string | null>(null)
	const [searchProduct] = useState<string | null>(null)

	return (
		<div>
			<ListCard
				products={products}
				selectedCategory={selectedCategory!}
				searchTerm={searchProduct!}
			/>
		</div>
	)
}

export default Campain
