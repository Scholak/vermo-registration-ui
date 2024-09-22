// Library Imports
import { z, ZodType } from 'zod'

// Type Imports
import { IForgotPasswordSchema, IResetPasswordFormSchema, ISigninSchema, ISignupSchema } from '@/types/authTypes'

const errors = {
	fullName: {
		required: 'Full Name field is required',
		max: 'Full Name field must be 25 characters at most',
	},
	email: {
		required: 'Email field is required',
		invalid: 'Email is invalid',
	},
	phoneNumber: {
		required: 'Phone Number field is required',
		invalid: 'Phone Number is invalid',
	},
	password: {
		required: 'Password field is required',
		min: 'Password field must be 8 characters at least',
		max: 'Password field must be 15 characters at most',
	},
	passwordConfirm: {
		required: 'Confirm Password field is required',
	},
}

export const signinSchema: ZodType<ISigninSchema> = z.object({
	email: z.string().min(1, errors.email.required).email(errors.email.invalid),
	password: z.string().min(1, errors.password.required).min(8, errors.password.min).max(15, errors.password.max),
})

export const signupSchema: ZodType<ISignupSchema> = z
	.object({
		fullName: z.string().min(1, errors.fullName.required).max(25, errors.fullName.max),
		email: z.string().min(1, errors.email.required).email(errors.email.invalid),
		phoneNumber: z.object(
			{
				code: z.string().optional(),
				value: z.string().min(1, errors.phoneNumber.required).min(10, errors.phoneNumber.invalid),
			},
			{ required_error: errors.phoneNumber.required },
		),
		password: z.string().min(1, errors.password.required).min(8, errors.password.min).max(15, errors.password.max),
		confirmPassword: z.string().min(1, errors.passwordConfirm.required),
	})
	.refine((data: ISignupSchema) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})

export const forgotPasswordSchema: ZodType<IForgotPasswordSchema> = z.object({
	email: z.string().min(1, errors.email.required).email(errors.email.invalid),
})

export const resetPasswordSchema: ZodType<IResetPasswordFormSchema> = z
	.object({
		password: z.string().min(1, errors.password.required).min(8, errors.password.min).max(15, errors.password.max),
		confirmPassword: z.string().min(1, errors.passwordConfirm.required),
	})
	.refine((data: ISignupSchema) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})
