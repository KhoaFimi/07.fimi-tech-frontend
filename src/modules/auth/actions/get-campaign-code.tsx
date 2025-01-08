'use server'

import { promises as fs } from 'fs'

import { productsSchema } from '@/modules/auth/schemas/card.schema'
import { ComboboxItem } from '@/types'

export const getCampaignCode = async () => {
	const file = await fs.readFile(
		process.cwd() + '/src/data/product-data.json',
		'utf-8'
	)

	const products = productsSchema.parse(JSON.parse(file))

	return products
		.map<ComboboxItem>((product, i) => ({
			id: i.toString(),
			label: product.id,
			value: product.id
		}))
		.filter(campaign => campaign.id !== 'fimiinvite')
}
