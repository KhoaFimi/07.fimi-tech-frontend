import { Report } from '@/types'

export const mockReportData: Report[] = [
	{
		id: '6785cd276e4083',
		createdAt: new Date('2024-01-01T10:00:00Z').toISOString(),
		campaignCode: 'CMP001',
		publisherCode: 'PUB001',
		customerName: 'Nguyễn Văn A',
		status: 'APPROVED',
		commision: 1500000,
		managmentCommission: 150000,
		managerCode: 'AM001'
	},
	{
		id: '6785cd276e408',
		createdAt: new Date('2024-01-05T15:30:00Z').toISOString(),
		campaignCode: 'CMP002',
		publisherCode: 'PUB002',
		customerName: 'Trần Thị B',
		status: 'PENDING',
		commision: 0,
		managmentCommission: 0,
		managerCode: 'AM002'
	},
	{
		id: '6785cd276e408',
		createdAt: new Date('2024-01-10T08:45:00Z').toISOString(),
		campaignCode: 'CMP003',
		publisherCode: 'PUB003',
		customerName: 'Lê Văn C',
		status: 'REJECTED',
		commision: 0,
		managmentCommission: 0,
		managerCode: 'AM003'
	},
	{
		id: '6785cd276e408',
		createdAt: new Date('2024-01-15T12:00:00Z').toISOString(),
		campaignCode: 'CMP004',
		publisherCode: 'PUB004',
		customerName: 'Phạm Thị D',
		status: 'APPROVED',
		commision: 3000000,
		managmentCommission: 300000,
		managerCode: 'AM001'
	}
]
