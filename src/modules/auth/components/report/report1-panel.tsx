import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Example = () => {
	return (
		<div>
			<div className='grid grid-cols-4 gap-4'>
				{' '}
				<Card className='relative w-full'>
					<CardHeader>
						<CardTitle className='text-center text-xl'>Đơn hàng</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-3 gap-1 px-2'>
						{' '}
						<Card className='mb-2 pt-2'>
							{' '}
							<CardTitle className='text-center text-green-400'>
								Approved
							</CardTitle>
							<CardContent className='text-center text-xl'> 0</CardContent>
						</Card>
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-blue-400'>
								Pending
							</CardTitle>
							<CardContent className='text-center text-xl'> 0</CardContent>
						</Card>
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-red-800'>
								Rejected
							</CardTitle>
							<CardContent className='text-center text-xl'> 0</CardContent>
						</Card>
					</div>
				</Card>
				<Card className='relative w-full'>
					<CardHeader>
						<CardTitle className='text-center text-xl'>
							Doanh Thu Quản Lý
						</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0 đ
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-2 gap-1 px-2'>
						{' '}
						<Card className='p-2'>
							<CardTitle className='text-center text-gray-700'>
								Đã nhận
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
						<Card className='p-2'>
							<CardTitle className='text-center text-gray-700'>
								Còn lại
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
					</div>
				</Card>
				<Card className='relative w-full'>
					<CardHeader>
						<CardTitle className='text-center text-xl'>
							Doanh Thu Cá nhân
						</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0 đ
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-2 gap-1 px-2'>
						{' '}
						<Card className='p-2'>
							<CardTitle className='text-center text-gray-700'>
								Đã nhận
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
						<Card className='p-2'>
							<CardTitle className='text-center text-gray-700'>
								Còn lại
							</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
					</div>
				</Card>
				<Card className='relative w-full'>
					<CardHeader>
						<CardTitle className='text-center text-xl'>Tổng số click</CardTitle>
						<CardContent className='text-center text-2xl font-bold'>
							0
						</CardContent>
					</CardHeader>

					<div className='grid grid-cols-2 gap-1 px-2'>
						{' '}
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-gray-700'>EPC</CardTitle>
							<CardContent className='text-center text-xl'> 0 đ</CardContent>
						</Card>
						<Card className='mb-2 p-2'>
							<CardTitle className='text-center text-gray-700'>CVR</CardTitle>
							<CardContent className='text-center text-xl'> 0 %</CardContent>
						</Card>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default Example
