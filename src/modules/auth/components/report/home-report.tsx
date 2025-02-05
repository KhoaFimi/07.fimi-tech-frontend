import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const HomeReport = () => {
	return (
		<div>
			<div className='grid grid-cols-4 gap-8'>
				<Card className='relative w-full rounded-lg border-4 border-emerald-500 p-8 text-center'>
					<CardHeader>
						<CardTitle>Ghi nhận hoa hồng</CardTitle>
					</CardHeader>
					<CardContent>12345</CardContent>
				</Card>
				<Card className='relative w-full rounded-lg border-4 border-sky-500 p-8 text-center'>
					<CardHeader>
						<CardTitle>Chưa hoàn tất đơn</CardTitle>
					</CardHeader>
					<CardContent>12345</CardContent>
				</Card>
				<Card className='relative w-full rounded-lg border-4 border-red-700 p-8 text-center'>
					<CardHeader>
						<CardTitle>Từ chối</CardTitle>
					</CardHeader>
					<CardContent>12345</CardContent>
				</Card>
				<Card className='relative w-full rounded-lg border-4 border-yellow-600 p-8 text-center'>
					<CardHeader>
						<CardTitle>Hoa hồng khả dụng</CardTitle>
					</CardHeader>
					<CardContent>12345</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default HomeReport
