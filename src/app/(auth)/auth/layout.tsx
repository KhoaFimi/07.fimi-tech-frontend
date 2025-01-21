import { FC, PropsWithChildren } from 'react'

import Policies from '@/components/policies/index'

const AuthLayout: FC<PropsWithChildren> = async ({ children }) => {
	return (
		<>
			{children}
			<Policies />
		</>
	)
}

export default AuthLayout
