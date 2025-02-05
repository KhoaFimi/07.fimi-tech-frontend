'use client'

import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, SetStateAction, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { changeEmail } from '@/modules/auth/actions/change-email'

const EmailDialog = ({
	isOpen,
	onClose,
	setVerificationKey,
	onOpenOtpDialog
}: {
	isOpen: boolean
	setVerificationKey: Dispatch<SetStateAction<string>>
	onClose: () => void
	onOpenOtpDialog: () => void
}) => {
	const [newEmail, setNewEmail] = useState<string>('')
	const [message, setMessage] = useState<string | null>(null)

	const { isPending, mutate: updateEmail } = useMutation({
		mutationFn: async (email: string) => await changeEmail(email),
		onSuccess: data => {
			if (data?.error) {
				setMessage(data.error)
			}
			if (data.success) {
				setVerificationKey(data.success)
				onClose()
				onOpenOtpDialog()
			}
		}
	})

	const onSubmit = () => {
		setMessage(null)
		updateEmail(newEmail)
	}

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Thay đổi email</DialogTitle>
				</DialogHeader>
				<form
					onSubmit={e => {
						e.preventDefault()
						onSubmit()
					}}
					className='space-y-4'
				>
					<div>
						<Label htmlFor='newEmail'>Email mới</Label>
						<Input
							id='newEmail'
							type='email'
							placeholder='Nhập email mới'
							value={newEmail}
							onChange={e => setNewEmail(e.target.value)}
						/>
					</div>
					{message && <p className='text-sm text-red-600'>{message}</p>}
					<DialogFooter>
						<Button
							variant='outline'
							onClick={onClose}
							disabled={isPending}
						>
							Huỷ bỏ
						</Button>
						<Button
							type='submit'
							className='bg-primary text-white'
							disabled={!newEmail.trim()}
						>
							Lưu
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default EmailDialog
