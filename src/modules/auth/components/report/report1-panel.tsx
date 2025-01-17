import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Example = () => {
	return (
		<div>
			<div className='ml-[-15px] grid w-[102.2%] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4'>
				<Card className='relative'>
					<CardHeader>
						<CardTitle className='text-center text-2xl'>Đơn hàng</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-3 gap-2 px-2'>
						<Card className='mb-5 p-2'>
							<CardTitle className='text-center text-xl text-green-400'>
								Approved
							</CardTitle>
							<CardContent className='text-center text-xl'> 0</CardContent>
						</Card>
						<Card className='mb-5 p-2'>
							<CardTitle className='text-center text-xl text-blue-400'>
								Pending
							</CardTitle>
							<CardContent className='text-center text-xl'> 0</CardContent>
						</Card>
						<Card className='mb-5 p-2'>
							<CardTitle className='text-center text-xl text-red-800'>
								Rejected
							</CardTitle>
							<CardContent className='text-center text-xl'> 0</CardContent>
						</Card>
					</div>
				</Card>

				<Card className='relative'>
					<CardHeader>
						<CardTitle className='text-center text-2xl'>
							Doanh Thu Quản Lý
						</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0 đ
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-2 gap-2 px-2'>
						<Card className='p-2'>
							<CardTitle className='text-center text-xl text-gray-700'>
								Đã nhận
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
						<Card className='p-2'>
							<CardTitle className='text-center text-xl text-gray-700'>
								Còn lại
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
					</div>
				</Card>

				<Card className='relative'>
					<CardHeader>
						<CardTitle className='text-center text-2xl'>
							Doanh Thu Cá Nhân
						</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0 đ
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-2 gap-2 px-2'>
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-xl text-gray-700'>
								Đã nhận
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-xl text-gray-700'>
								Còn lại
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
					</div>
				</Card>

				<Card className='relative'>
					<CardHeader>
						<CardTitle className='text-center text-2xl'>
							Tổng số click
						</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-2 gap-2 px-2'>
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-xl text-gray-700'>
								EPC
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-xl text-gray-700'>
								CVR
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 %</CardContent>
						</Card>
					</div>
				</Card>
			</div>

			<div className='mt-4 flex justify-end'>
				<Button
					variant='outline'
					className='border-[3px] border-black hover:bg-primary'
				>
					Xuất Bản
				</Button>
			</div>
		</div>
	)
}

export default Example
