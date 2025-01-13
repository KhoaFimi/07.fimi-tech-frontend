import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const authRoutes = [
	'/auth/register',
	'/auth/login',
	'/auth/email-verification',
	'/auth/reset-password',
	'/auth/forgot-password'
]

const protectedRoutes = ['/dashboard/report', '/dashboard/campaign']

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	console.log('Requested path:', path)

	const cookieStore = await cookies()
	const refreshToken = cookieStore.get('refreshToken')?.value

	const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))

	const isAuthRoute = authRoutes.includes(path)

	if (path.startsWith('/api/auth') && refreshToken) {
		req.headers.set('authorization', `Bearer ${refreshToken}`)
	}

	if (isProtectedRoute && !refreshToken) {
		return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
	}

	if (isAuthRoute && refreshToken) {
		return NextResponse.redirect(new URL('/dashboard/campaign', req.nextUrl))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
