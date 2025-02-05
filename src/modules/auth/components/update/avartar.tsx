'use client'

import { useMutation } from '@tanstack/react-query'
import { Camera, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { Input } from '@/components/ui/input'
import { changeAvatar } from '@/modules/auth/actions/change-avatar'

interface AvatarUploaderProps {
	initialImage?: string
	onImageChange?: (file: File) => void
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({
	initialImage,
	onImageChange
}) => {
	const [uploadedImage, setUploadedImage] = useState<string | undefined>(
		initialImage
	)
	const [message, setMessage] = useState<string | null>(null)
	const fileInputRef = useRef<HTMLInputElement | null>(null)

	const { isPending, mutate: uploadAvatar } = useMutation({
		mutationFn: async (file: File) => await changeAvatar(file),
		onSuccess: data => {
			if (data?.error) {
				setMessage(data.error)
			}
		}
	})

	const handleImageChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = event.target.files
		if (files && files[0]) {
			const file = files[0]

			const imageUrl = URL.createObjectURL(file)
			setUploadedImage(imageUrl)

			if (onImageChange) {
				onImageChange(file)
			}

			setMessage(null)
			uploadAvatar(file)
		}
	}

	return (
		<div className='relative h-24 w-24'>
			<label
				htmlFor='file-upload'
				className='relative block cursor-pointer'
			>
				{uploadedImage ? (
					<Image
						src={uploadedImage}
						alt='Avatar'
						className='h-full w-full rounded-full object-cover'
						width={96}
						height={96}
					/>
				) : (
					<div className='h-24 w-24 rounded-full bg-gray-200'></div>
				)}

				<div className='absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white'>
					{isPending ? (
						<Loader2 className='h-5 w-5 animate-spin' />
					) : (
						<Camera className='h-5 w-5' />
					)}
				</div>
			</label>

			<Input
				ref={fileInputRef}
				id='file-upload'
				type='file'
				className='sr-only'
				accept='image/*'
				onChange={handleImageChange}
			/>

			{message && <p className='mt-2 text-sm text-red-500'>{message}</p>}
		</div>
	)
}

export default AvatarUploader
