// Library Imports
import { useState } from 'react'
import { View, Keyboard } from 'react-native'

// Component Imports
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'

// Utility Imports
import { formValidator } from '@/helpers/formValidator'
import { resetPasswordSchema } from '@/validations/authValidations'

// Type Imports
import { IResetPasswordFormSchema } from '@/types/authTypes'

type IResetPasswordFormProps = {
	onSubmit: (password: string) => void
	isRequesting: boolean
}

const ResetPasswordForm = ({ onSubmit, isRequesting }: IResetPasswordFormProps) => {
	const [formData, setFormData] = useState<IResetPasswordFormSchema>({
		password: '',
		confirmPassword: '',
	})
	const [errors, setErrors] = useState<IResetPasswordFormSchema>()

	const handleForgotPassword = () => {
		Keyboard.dismiss()

		const { data, errors } = formValidator(formData, resetPasswordSchema)

		if (errors) setErrors(errors)
		else {
			setErrors({})
			onSubmit(data?.password as string)
		}
	}

	return (
		<View className='mb-10 gap-5'>
			<Input
				type='password'
				onChange={(password: string) => setFormData(prev => ({ ...prev, password }))}
				error={errors?.password}
				placeholder='New Password'
			/>
			<Input
				type='password'
				onChange={(confirmPassword: string) => setFormData(prev => ({ ...prev, confirmPassword }))}
				error={errors?.confirmPassword}
				placeholder='Confirm New Password'
			/>
			<Button
				text='Update'
				onPress={handleForgotPassword}
				className='mt-6 font-poppins-regular'
				disabled={isRequesting}
			/>
		</View>
	)
}

export default ResetPasswordForm
