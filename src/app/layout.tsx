import '@/styles/globals.css'

import type { Metadata } from 'next'
import { EB_Garamond, Montserrat } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import { QueryProvider } from '@/components/providers/query-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

import ogImage from '../../public/og.jpg'

const montserrat = Montserrat({
	subsets: ['latin', 'vietnamese'],
	variable: '--font-sans'
})

const eb_garamond = EB_Garamond({
	subsets: ['latin', 'vietnamese'],
	variable: '--font-heading'
})

export const metadata: Metadata = {
	title: {
		default: 'FIMI',
		template: 'FIMI | %s'
	},
	description: 'Công Ty TNHH Công Nghệ FIMI - Giải Pháp Bán Hàng Đa Kênh',
	metadataBase: new URL('https://aff.fimi.tech'),
	openGraph: {
		title: {
			default: 'FIMI',
			template: 'FIMI | %s'
		},
		description: 'FIMI - Giải pháp bán hàng đa kênh',
		url: 'https://aff.fimi.tech',
		siteName: 'FIMI',
		images: [
			{
				url: ogImage.src,
				width: ogImage.width,
				height: ogImage.height
			}
		]
	}
}

const RootLayour: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html
			lang='en'
			className={cn(montserrat.className, eb_garamond.className)}
		>
			<body className='flex min-h-[calc(100vh-1px)] flex-col bg-white/80 font-sans antialiased'>
				<main className='relative flex flex-1 flex-col'>
					<QueryProvider>{children}</QueryProvider>
					<Toaster />
				</main>
			</body>
		</html>
	)
}

export default RootLayour
