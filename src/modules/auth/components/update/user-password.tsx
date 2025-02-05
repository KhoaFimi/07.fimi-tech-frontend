'use client'

import { useMutation } from '@tanstack/react-query'
import React, { useCallback, useEffect, useState } from 'react'

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
import { changePassword } from '@/modules/auth/actions/change-password'

const PasswordDialog = ({
	isOpen,
	onClose
}: {
	isOpen: boolean
	onClose: () => void
}) => {
	const [oldPassword, setOldPassword] = useState<string>('')
	const [newPassword, setNewPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [message, setMessage] = useState<string | null>(null)
	const [successMessage, setSuccessMessage] = useState<string | null>(null)

	const { isPending, mutate: handleChangePassword } = useMutation({
		mutationFn: async () => await changePassword(oldPassword, newPassword),
		onSuccess: data => {
			if (data?.error) {
				setMessage(data.error)
				setSuccessMessage(null)
			} else {
				setSuccessMessage('Thay đổi mật khẩu thành công, yêu cầu đăng nhập lại')
				setMessage(null)
				setTimeout(() => {
					onClose()
				}, 2000)
			}
		}
	})

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault()

			if (newPassword !== confirmPassword) {
				setMessage('Mật khẩu mới không khớp.')
				return
			}

			handleChangePassword()
		},
		[newPassword, confirmPassword, handleChangePassword]
	)

	useEffect(() => {
		if (!isOpen) {
			setOldPassword('')
			setNewPassword('')
			setConfirmPassword('')
			setMessage(null)
			setSuccessMessage(null)
		}
	}, [isOpen])

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Đổi Mật Khẩu</DialogTitle>
				</DialogHeader>
				<form
					onSubmit={handleSubmit}
					className='space-y-4'
				>
					<div>
						<Label htmlFor='oldPassword'>Mật Khẩu Cũ</Label>
						<Input
							id='oldPassword'
							type='password'
							placeholder='Nhập mật khẩu cũ'
							value={oldPassword}
							onChange={e => setOldPassword(e.target.value)}
						/>
					</div>
					<div>
						<Label htmlFor='newPassword'>Mật Khẩu Mới</Label>
						<Input
							id='newPassword'
							type='password'
							placeholder='Nhập mật khẩu mới'
							value={newPassword}
							onChange={e => setNewPassword(e.target.value)}
						/>
					</div>
					<div>
						<Label htmlFor='confirmPassword'>Xác Nhận Mật Khẩu Mới</Label>
						<Input
							id='confirmPassword'
							type='password'
							placeholder='Xác nhận mật khẩu mới'
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
						/>
					</div>
					{message && <p className='text-sm text-red-600'>{message}</p>}
					{successMessage && (
						<p className='text-sm text-green-600'>{successMessage}</p>
					)}
					<DialogFooter>
						<Button
							variant='outline'
							onClick={onClose}
							disabled={isPending}
						>
							Hủy
						</Button>
						<Button
							type='submit'
							className='bg-primary text-white'
							disabled={
								isPending || !oldPassword || !newPassword || !confirmPassword
							}
						>
							{isPending ? 'Đang xử lý...' : 'Xác nhận'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default PasswordDialog
