import { redirect } from 'next/navigation'

const HomePage = async () => {
	redirect('/dashboard/campaign')
}

export default HomePage
