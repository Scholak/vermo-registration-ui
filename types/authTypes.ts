export type ISigninSchema = {
	email?: string
	password?: string
}

export type ISignupSchema = {
	fullName?: string
	email?: string
	phoneNumber?: {
		code?: string
		value?: string
	}
	password?: string
	confirmPassword?: string
}

export type IForgotPasswordSchema = {
	email?: string
}

export type IResetPasswordFormSchema = {
	password?: string
	confirmPassword?: string
}
