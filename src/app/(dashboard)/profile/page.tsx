'use client'

import ImportantInfo from '@/modules/auth/components/update/important-info'
import UpdateUser from '@/modules/auth/components/update/user-infomation'

const UpdateUserPage = () => {
	return (
		<div className='rounded-lg border-2 border-gray-900 p-6 shadow-md'>
			<div className='flex space-x-6'>
				<div className='flex-1'>
					<UpdateUser />
				</div>

				<div className='w-1/3'>
					<ImportantInfo />
				</div>
			</div>
		</div>
	)
}

export default UpdateUserPage
