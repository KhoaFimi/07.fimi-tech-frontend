'use client'

import { useState } from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import Banner from '@/modules/auth/components/banner/banner'
import ListCard from '@/modules/auth/components/listCard/listCard'
import AppSidebar from '@/modules/auth/components/sidebar/sidebar'

import { PRODUCT_CATEGORY_DESCRIPTION } from '../../../category'

const Campain = () => {
	const products = [
		{
			id: '1',
			category: PRODUCT_CATEGORY_DESCRIPTION.creditCard,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/1',
			show: {
				image: 'vpblady.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '2',
			category: PRODUCT_CATEGORY_DESCRIPTION.creditCard,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/2',
			show: {
				image: 'vpbgenz.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '3',
			category: PRODUCT_CATEGORY_DESCRIPTION.creditCard,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/3',
			show: {
				image: 'vpbstepup.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '4',
			category: PRODUCT_CATEGORY_DESCRIPTION.creditCard,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/4',
			show: {
				image: 'vpblady.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '5',
			category: PRODUCT_CATEGORY_DESCRIPTION.creditCard,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/5',
			show: {
				image: 'vpbvna.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '6',
			category: PRODUCT_CATEGORY_DESCRIPTION.paymentAccount,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/6',
			show: {
				image: 'vpbmc2.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '7',
			category: PRODUCT_CATEGORY_DESCRIPTION.paymentAccount,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/7',
			show: {
				image: 'vpbgenz.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '8',
			category: PRODUCT_CATEGORY_DESCRIPTION.paymentAccount,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/8',
			show: {
				image: 'vpbstepup.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '9',
			category: PRODUCT_CATEGORY_DESCRIPTION.paymentAccount,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/9',
			show: {
				image: 'vpbvna.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		},
		{
			id: '10',
			category: PRODUCT_CATEGORY_DESCRIPTION.loan,
			name: 'Thẻ tín dụng ACB',
			advertiser: 'Ngân hàng ACB',
			link: '/campaign/10',
			show: {
				image: 'vpblady.png',
				income: '200,000 VND',
				commision: '5%',
				approvalTime: '2 ngày'
			},
			productOffer: [
				{
					summary: 'Ưu đãi đặc biệt',
					offer: ['Miễn phí thường niên', 'Tích điểm đổi quà']
				}
			],
			customerRequirement: 'Yêu cầu xác minh thu nhập',
			supportArea: 'Toàn quốc',
			creditBackground: 'Không yêu cầu',
			workBackground: 'Không yêu cầu',
			income: '10 triệu VND/tháng',
			cardLimit: '100 triệu VND',
			dailyCashLimit: '10 triệu VND',
			cardValidTime: '3 năm',
			paymentTerm: 'Hàng tháng',
			requiredDocuments: 'CMND, Sổ hộ khẩu',
			approvalTime: '2 ngày',
			finalResultTime: '5 ngày',
			commisionPolicy: {
				status: 'Active',
				description: 'Chính sách hoa hồng hấp dẫn',
				commision: ['5% cho giao dịch đầu tiên'],
				note: 'Áp dụng với khách hàng mới'
			},
			recognitionRules: {
				summary: 'Quy tắc ghi nhận',
				rules: ['Đăng ký hợp lệ', 'Xác minh thông tin đầy đủ'],
				note: 'Không áp dụng cho khách hàng đã có thẻ'
			},
			registrationProcess: ['Đăng ký online', 'Xác minh thông tin'],
			rejectReason: ['Không đủ điều kiện tài chính'],
			unqualifiedRecords: ['Thiếu giấy tờ tùy thân']
		}
	]
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const handleCategoryChange = (value: string) => {
		setSelectedCategory(value)
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
							onCategoryChange={handleCategoryChange}
						/>
					</div>

					<div className='mt-[40px] p-4'>
						<div className='mb-6'>
							<ListCard
								products={products}
								selectedCategory={selectedCategory!}
							/>
						</div>
					</div>
				</div>
			</SidebarProvider>
		</div>
	)
}

export default Campain
