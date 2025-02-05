'use client'

import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'

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
import { changePhone } from '@/modules/auth/actions/change-phone'

const PhoneDialog = ({
	isOpen,
	onClose
}: {
	isOpen: boolean
	onClose: () => void
}) => {
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [message, setMessage] = useState<string | null>(null)
	const [successMessage, setSuccessMessage] = useState<string | null>(null)

	const { isPending, mutate: updatePhone } = useMutation({
		mutationFn: async (phone: string) => await changePhone(phone),
		onSuccess: data => {
			if (data?.error) {
				setMessage(data.error)
			} else {
				setMessage('bạn đã thay đổi thành công ')
				setTimeout(() => {
					onClose()
				}, 2000)
			}
		}
	})

	const onSubmit = () => {
		setSuccessMessage(null)
		updatePhone(phoneNumber)
	}

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Thay đổi số điện thoại</DialogTitle>
				</DialogHeader>
				<form
					onSubmit={e => {
						e.preventDefault()
						onSubmit()
					}}
					className='space-y-4'
				>
					<div>
						<Label htmlFor='newPhone'>Số điện thoại mới</Label>
						<Input
							id='newPhone'
							type='text'
							placeholder='Enter your new phone number'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
						/>
					</div>
					{message && (
						<p
							className={`text-sm ${
								message.includes('success') ? 'text-green-600' : 'text-red-600'
							}`}
						>
							{message}
						</p>
					)}
					{successMessage && (
						<p className='text-sm text-green-600'>{successMessage}</p>
					)}
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
							disabled={isPending || !phoneNumber.trim()}
						>
							{isPending ? 'Updating...' : 'Submit'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default PhoneDialog
