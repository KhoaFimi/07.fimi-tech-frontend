import { FC, PropsWithChildren, ReactNode } from 'react'

type FormWrapperProps = PropsWithChildren<{
	title: string
	description?: string
	icon?: ReactNode // Optional icon prop
}>

export const FormWrapper: FC<FormWrapperProps> = ({
	title,
	children,
	description,
	icon
}) => {
	return (
		<div className='w-full rounded-lg border p-4 shadow'>
			<div className='pb-4'>
				<div className='flex items-center justify-center gap-2'>
					{icon && <div className='icon'>{icon}</div>}{' '}
					<h4 className='text-center text-lg font-bold uppercase tracking-tight text-primary xl:text-xl'>
						{title}
					</h4>
				</div>
				{description && (
					<p className='text-center text-xs font-medium tracking-tight text-foreground/50'>
						{description}
					</p>
				)}
			</div>
			{children}
		</div>
	)
}
