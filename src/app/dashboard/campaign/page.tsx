'use client'
import {
	CircleDollarSign,
	CreditCard,
	HandCoins,
	Package,
	Users
} from 'lucide-react'
import React from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import { PRODUCT_CATEGORY } from '@/constant/enum'
import Banner from '@/modules/auth/components/banner/banner'
import ListCard from '@/modules/auth/components/listCard/listCard'
import AppSidebar from '@/modules/auth/components/sidebar/sidebar'

const Campain = () => {
	const products = [
		{
			link: '/campaign/1',
			id: '1',
			category: PRODUCT_CATEGORY.creditCard,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			show: {
				image: 'VPBank_new.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			description: 'Thẻ tín dụng với ưu đãi hoàn tiền hấp dẫn.',
			paymentTerm: 'Hàng tháng',
			productOffer: 'Ưu đãi đặc biệt',
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			requiredDocuments: 'Chứng minh thư, Hộ khẩu',
			finalResultTime: '5 ngày',
			commisionPolicy: '5% trên mỗi giao dịch'
		},
		{
			link: '/campaign/2',
			id: '2',
			category: PRODUCT_CATEGORY.paymentAccount,
			name: 'VP Lady',
			advertiser: 'VP Lady',
			show: {
				image: 'VPBank_JCB.png',
				income: '150,000 VND',
				commision: '3%',
				approvalTime: '1 ngày'
			},
			description: 'Tài khoản thanh toán với lãi suất hấp dẫn.',
			paymentTerm: 'Hàng tháng',
			productOffer: 'Miễn phí giao dịch',
			customerRequirement: 'Không yêu cầu thu nhập',
			supportArea: 'Toàn quốc',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			finalResultTime: '2 ngày',
			commisionPolicy: '3% trên mỗi giao dịch'
		},
		{
			link: '/campaign/3',
			id: '3',
			category: PRODUCT_CATEGORY.paymentAccount,
			name: 'VP Lady',
			advertiser: 'VP Lady',
			show: {
				image: 'VPBank_Lady.png',
				income: '150,000 VND',
				commision: '3%',
				approvalTime: '1 ngày'
			},
			description: 'Tài khoản thanh toán với lãi suất hấp dẫn.',
			paymentTerm: 'Hàng tháng',
			productOffer: 'Miễn phí giao dịch',
			customerRequirement: 'Không yêu cầu thu nhập',
			supportArea: 'Toàn quốc',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			finalResultTime: '2 ngày',
			commisionPolicy: '3% trên mỗi giao dịch'
		},
		{
			link: '/campaign/4',
			id: '4',
			category: PRODUCT_CATEGORY.paymentAccount,
			name: 'VP Lady',
			advertiser: 'VP Lady',
			show: {
				image: 'VPBank_Prime.png',
				income: '150,000 VND',
				commision: '3%',
				approvalTime: '1 ngày'
			},
			description: 'Tài khoản thanh toán với lãi suất hấp dẫn.',
			paymentTerm: 'Hàng tháng',
			productOffer: 'Miễn phí giao dịch',
			customerRequirement: 'Không yêu cầu thu nhập',
			supportArea: 'Toàn quốc',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			finalResultTime: '2 ngày',
			commisionPolicy: '3% trên mỗi giao dịch'
		},
		{
			link: '/campaign/5',
			id: '5',
			category: PRODUCT_CATEGORY.paymentAccount,
			name: 'VP Lady',
			advertiser: 'VP Lady',
			show: {
				image: 'VPBank_Lady.png',
				income: '150,000 VND',
				commision: '3%',
				approvalTime: '1 ngày'
			},
			description: 'Tài khoản thanh toán với lãi suất hấp dẫn.',
			paymentTerm: 'Hàng tháng',
			productOffer: 'Miễn phí giao dịch',
			customerRequirement: 'Không yêu cầu thu nhập',
			supportArea: 'Toàn quốc',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			finalResultTime: '2 ngày',
			commisionPolicy: '3% trên mỗi giao dịch'
		}
	]
	const pickIcon = (category: string) => {
		switch (category) {
			case PRODUCT_CATEGORY.creditCard:
				return <CreditCard className='mr-2 inline text-primary' />
			case PRODUCT_CATEGORY.paymentAccount:
				return <CircleDollarSign className='mr-2 inline text-primary' />
			case PRODUCT_CATEGORY.recruitment:
				return <Users className='mr-2 inline text-primary' />
			case PRODUCT_CATEGORY.loan:
				return <HandCoins className='mr-2 inline text-primary' />
			default:
				return <Package className='mr-2 inline text-primary' />
		}
	}
	return (
		<div className='relative flex h-screen'>
			<SidebarProvider>
				<AppSidebar />
				<div className='flex-1'>
					<div className='fixed left-0 top-0 z-40 w-full md:left-[243px]'>
						<Banner
							avatarUrl='/card/anhDaiDien.jfif'
							userName='Đăng Khoa'
						/>
					</div>

					<div className='mt-[80px] p-4'>
						<div className='mb-6'>
							<h2 className='mb-4 ml-[-15px] flex text-xl font-bold text-primary'>
								{pickIcon(PRODUCT_CATEGORY.creditCard)}
								Thẻ tín dụng
							</h2>
							<ListCard products={products} />
						</div>

						<div className='mb-6 mt-14'>
							<h2 className='mb-4 ml-[-15px] flex text-xl font-bold text-primary'>
								{pickIcon(PRODUCT_CATEGORY.paymentAccount)}
								Tài Khoản Thanh Toán
							</h2>
							<ListCard products={products} />
						</div>

						<div className='mb-6 mt-14'>
							<h2 className='mb-4 ml-[-15px] flex text-xl font-bold text-primary'>
								{pickIcon(PRODUCT_CATEGORY.loan)}
								Vay Tín Chấp
							</h2>
							<ListCard products={products} />
						</div>
					</div>
				</div>
			</SidebarProvider>
		</div>
	)
}

export default Campain
