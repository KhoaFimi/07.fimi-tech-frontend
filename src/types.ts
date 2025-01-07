export interface ComboboxItem {
	id: string
	value: string
	label: string
}

export interface AddressApiResponse {
	error: number
	error_text: string
	data_name?: string
	data: CityType[]
}

export interface BankApiResponse {
	code: string
	desc: string
	data: BankType[]
}

export type CityType = {
	id: string
	name: string
	name_en: string
	full_name: string
	full_name_en: string
	latitude: string
	longitude: string
}

export type BankType = {
	id: number
	name: string
	code: string
	bin: string
	shortName: string
	logo: string
	transferSupported: number
	lookupSupported: number
	short_name: string
	support: number
	isTransfer: number
	swift_code: string
}

export type Report = {
	id: string
	createdAt: string
	publisherCode: string
	campaignCode: string
	customerName: string
	customerPhone: string
	customerEmail: string
	customerProvince: string
	status: 'APPROVED' | 'REJECTED' | 'PENDING'
	commision: number
	paymentStatus: 'PAID' | 'REMAIN'
	managerCode: string
}

export enum SuccessCode {
	OK = 'S2000', // Created record successfully
	CREATED = 'S2010', // Request OK
	ACCEPTED = 'S2020', // Request Accepted by server
	NOT_VERIFIED = 'S2001' // Ok but verification requirement
}

export enum ErrorCode {
	VAL_ERROR = 'E4001', // Zod validation error
	MISSING_ERROR = 'E4002', // Missing data error
	NOT_MATCHED_ERROR = 'E4003', // Input data not matched
	OTP_EXPIRES_ERROR = 'E4004', // Otp is expires
	NO_TNC_ERROR = 'E4005', // No TNC
	ACCESS_TOKEN_EXPIRED_ERROR = 'E4011', // Access token is expired
	UNAUTHORIZED_ERROR = 'E4000',
	NOT_FOUND_ERROR = 'E4040', // Not found error
	WRONG_CREDENTIALS_ERROR = 'E4041', // Credentials is wrong
	DUPLICATED_ERROR = 'E4091' // Duplicated record
}

export interface IResponse<T = any> {
	statusCode: SuccessCode | ErrorCode
	message: string
	data: T
}
