// Library Imports
import { useState } from 'react'
import { Link } from 'expo-router'
import { Keyboard, View } from 'react-native'

// Component Imports
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'

// Utility Imports
import { formValidator } from '@/helpers/formValidator'
import { signinSchema } from '@/validations/authValidations'

// Type Imports
import { ISigninSchema } from '@/types/authTypes'

type ISigninFormProps = {
	onSubmit: (formData: ISigninSchema) => void
	isRequesting: boolean
}

const SigninForm = ({ onSubmit, isRequesting }: ISigninFormProps) => {
	const [formData, setFormData] = useState<ISigninSchema>({
		email: '',
		password: '',
	})

	const [errors, setErrors] = useState<ISigninSchema>()

	const handleSignin = () => {
		Keyboard.dismiss()

		const { data, errors } = formValidator(formData, signinSchema)

		if (errors) setErrors(errors)
		else {
			setErrors({})
			onSubmit(data as ISigninSchema)
		}
	}

	return (
		<View className='mb-10 gap-5'>
			<Input
				onChange={(email: string) => setFormData(prev => ({ ...prev, email }))}
				error={errors?.email}
				placeholder='Email'
			/>
			<Input
				type='password'
				onChange={(password: string) => setFormData(prev => ({ ...prev, password }))}
				error={errors?.password}
				placeholder='Password'
			/>
			<Link
				href='forgot-password'
				className='ml-auto text-primary font-poppins-medium'
			>
				Forgot Password
			</Link>
			<Button
				text='Login'
				onPress={handleSignin}
				className='mt-6 font-poppins-regular'
				disabled={isRequesting}
			/>
		</View>
	)
}

export default SigninForm
