import { NextRequest, NextResponse } from 'next/server'

import { refreshToken } from '@/modules/auth/actions/refreshToken'

const authRoutes = [
	'/auth/register',
	'/auth/login',
	'/auth/email-verification',
	'/auth/reset-password',
	'/auth/forgot-password'
]

const protectedRoutes = [
	'/dashboard/report',
	'/dashboard/campaign',
	'/dashboard/dashboard',
	'/dashboard/profile'
]

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	const Response = await refreshToken()

	const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))

	const isAuthRoute = authRoutes.includes(path)

	if (path.startsWith('/api/auth')) {
		return
	}
	// if (Response.error) {
	// 	return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
	// }
	if (isProtectedRoute && Response.accessToken) {
		return NextResponse.redirect(new URL('/', req.nextUrl))
	}
	if (isAuthRoute && Response.accessToken) {
		return NextResponse.redirect(new URL('/', req.nextUrl))
	}

	if (isProtectedRoute && !Response.accessToken) {
		return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
