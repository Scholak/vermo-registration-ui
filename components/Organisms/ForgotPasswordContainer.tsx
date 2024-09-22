// Library Imports
import { View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Text } from 'react-native'

// Component Imports
import BackButton from '@/components/Atoms/BackButton'
import ForgotPasswordForm from '@/components/Molecules/ForgotPasswordForm'

type ISignupContainerProps = {
	onForgotPassword: (email: string) => void
	isRequesting: boolean
}

const ForgotPasswordContainer = ({ isRequesting, onForgotPassword }: ISignupContainerProps) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			className='flex-1 justify-center pt-8'
		>
			<TouchableWithoutFeedback
				onPress={Keyboard.dismiss}
				accessible={false}
				className='flex-1'
			>
				<>
					<BackButton />
					<View className='mt-12 mb-auto gap-12'>
						<Text className='font-poppins-bold text-3xl'>Forgot Password</Text>
						<Text className='font-poppins-medium text-lg text-secondary'>
							Please enter your registered Email to reset your password
						</Text>
						<ForgotPasswordForm
							onSubmit={onForgotPassword}
							isRequesting={isRequesting}
						/>
					</View>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default ForgotPasswordContainer
