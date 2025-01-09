import { NextRequest, NextResponse } from 'next/server'

const authRoutes = ['/auth/register', '/auth/login']
const protectedRoutes = ['dashboard/report', 'dashboard/campaign']

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	const isProtectedRoute = protectedRoutes.includes(path)
	const isAuthRoute = authRoutes.includes(path)

	const accessToken = req.headers.get('authorization')?.split(' ')[1]

	if (isProtectedRoute && !accessToken) {
		return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
	}

	if (
		isAuthRoute &&
		accessToken &&
		!req.nextUrl.pathname.startsWith('/dashboard/campaign')
	) {
		return NextResponse.redirect(new URL('/dashboard/campaign', req.nextUrl))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/credit']
}
