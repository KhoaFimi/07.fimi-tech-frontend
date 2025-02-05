'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import OTPForm from '@/modules/auth/components/otp/otp-change-email'
import EmailDialog from '@/modules/auth/components/update/user-email'
import PasswordDialog from '@/modules/auth/components/update/user-password'
import PhoneDialog from '@/modules/auth/components/update/user-phone'

const ImportantInfo = () => {
	const [dialogType, setDialogType] = useState<'otp' | null>(null)
	const [phoneDialogOpen, setPhoneDialogOpen] = useState<boolean>(false)
	const [emailDialogOpen, setEmailDialogOpen] = useState<boolean>(false)
	const [passwordDialogOpen, setPasswordDialogOpen] = useState<boolean>(false)

	const [verificationKey, setVerificationKey] = useState<string>('')

	const handleDialogClose = () => setDialogType(null)

	const handleOpenOtpDialog = () => setDialogType('otp')

	return (
		<div className='mx-auto max-w-lg space-y-4 rounded-md border-2 bg-white p-6 shadow-lg'>
			<h2 className='text-lg font-semibold text-gray-700'></h2>
			<div className='flex flex-col space-y-4'>
				{['password', 'phone', 'email'].map(type => (
					<Button
						key={type}
						variant='default'
						onClick={() =>
							type === 'phone'
								? setPhoneDialogOpen(true)
								: type === 'email'
									? setEmailDialogOpen(true)
									: setPasswordDialogOpen(true)
						}
						className='w-full'
					>
						{type === 'password'
							? 'Thay đổi password'
							: type === 'phone'
								? 'Thay đổi số điện thoại'
								: 'Thay đổi email'}
					</Button>
				))}
			</div>

			<Dialog
				open={dialogType === 'otp'}
				onOpenChange={handleDialogClose}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Verify OTP</DialogTitle>
					</DialogHeader>
					{dialogType === 'otp' && (
						<OTPForm
							verificationKey={verificationKey}
							onClose={handleDialogClose}
						/>
					)}
				</DialogContent>
			</Dialog>

			<PhoneDialog
				isOpen={phoneDialogOpen}
				onClose={() => setPhoneDialogOpen(false)}
			/>
			<EmailDialog
				setVerificationKey={setVerificationKey}
				isOpen={emailDialogOpen}
				onClose={() => setEmailDialogOpen(false)}
				onOpenOtpDialog={handleOpenOtpDialog}
			/>
			<PasswordDialog
				isOpen={passwordDialogOpen}
				onClose={() => setPasswordDialogOpen(false)}
			/>
		</div>
	)
}

export default ImportantInfo
