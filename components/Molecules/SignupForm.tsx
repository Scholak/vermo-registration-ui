// Library Imports
import { useState } from 'react'
import { Keyboard, View } from 'react-native'

// Component Imports
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'
import PhoneInput from '@/components/Atoms/PhoneInput'

// Utility Imports
import { formValidator } from '@/helpers/formValidator'
import { signupSchema } from '@/validations/authValidations'

// Type Imports
import { ISignupSchema } from '@/types/authTypes'

type ISignupFormProps = {
	onSubmit: (formData: ISignupSchema) => void
	isRequesting: boolean
}

const SignupForm = ({ onSubmit, isRequesting }: ISignupFormProps) => {
	const [formData, setFormData] = useState<ISignupSchema>({
		fullName: '',
		email: '',
		phoneNumber: {
			code: '',
			value: '',
		},
		password: '',
		confirmPassword: '',
	})

	const [errors, setErrors] = useState<ISignupSchema>()

	const handleSignup = () => {
		Keyboard.dismiss()

		const { data, errors } = formValidator(formData, signupSchema)

		if (errors) setErrors(errors)
		else {
			setErrors({})
			onSubmit(data as ISignupSchema)
		}
	}

	return (
		<View className='mb-6 gap-5'>
			<Input
				onChange={(fullName: string) => setFormData(prev => ({ ...prev, fullName }))}
				error={errors?.fullName}
				placeholder='Full Name'
			/>
			<Input
				onChange={(email: string) => setFormData(prev => ({ ...prev, email }))}
				error={errors?.email}
				placeholder='Email'
			/>
			<PhoneInput
				onChange={(phoneNumber: { code: string; value: string }) => setFormData(prev => ({ ...prev, phoneNumber }))}
				// @ts-ignore
				error={errors?.phoneNumber ?? (errors?.['phoneNumber.value'] as string)}
			/>
			<Input
				type='password'
				onChange={(password: string) => setFormData(prev => ({ ...prev, password }))}
				error={errors?.password}
				placeholder='Password'
			/>
			<Input
				type='password'
				onChange={(confirmPassword: string) => setFormData(prev => ({ ...prev, confirmPassword }))}
				error={errors?.confirmPassword}
				placeholder='Confirm Password'
			/>
			<Button
				text='Register'
				onPress={handleSignup}
				className='mt-8 font-poppins-regular'
				disabled={isRequesting}
			/>
		</View>
	)
}

export default SignupForm
