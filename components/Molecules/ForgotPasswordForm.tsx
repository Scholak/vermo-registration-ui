// Library Imports
import { useState } from 'react'
import { View, Keyboard } from 'react-native'

// Component Imports
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'

// Utility Imports
import { formValidator } from '@/helpers/formValidator'
import { forgotPasswordSchema } from '@/validations/authValidations'

// Type Imports
import { IForgotPasswordSchema } from '@/types/authTypes'

type IForgotPasswordFormProps = {
	onSubmit: (email: string) => void
	isRequesting: boolean
}

const ForgotPasswordForm = ({ onSubmit, isRequesting }: IForgotPasswordFormProps) => {
	const [formData, setFormData] = useState<IForgotPasswordSchema>({
		email: '',
	})
	const [errors, setErrors] = useState<IForgotPasswordSchema>()

	const handleForgotPassword = () => {
		Keyboard.dismiss()

		const { data, errors } = formValidator(formData, forgotPasswordSchema)

		if (errors) setErrors(errors)
		else {
			setErrors({})
			onSubmit(data?.email as string)
		}
	}

	return (
		<View className='mb-10 gap-5'>
			<Input
				onChange={(email: string) => setFormData({ email })}
				error={errors?.email}
				placeholder='Email'
			/>
			<Button
				text='Recover Password'
				onPress={handleForgotPassword}
				className='mt-6 font-poppins-regular'
				disabled={isRequesting}
			/>
		</View>
	)
}

export default ForgotPasswordForm
