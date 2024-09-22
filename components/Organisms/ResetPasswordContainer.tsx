// Library Imports
import { View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Text } from 'react-native'

// Component Imports
import BackButton from '@/components/Atoms/BackButton'
import ResetPasswordForm from '@/components/Molecules/ResetPasswordForm'

type IResetPasswordContainerProps = {
	onResetPassword: (password: string) => void
	isRequesting: boolean
}

const ResetPasswordContainer = ({ isRequesting, onResetPassword }: IResetPasswordContainerProps) => {
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
						<Text className='font-poppins-bold text-3xl'>Reset Password</Text>
						<Text className='font-poppins-medium text-lg text-secondary'>
							Pleas enter your password and confirm the password
						</Text>
						<ResetPasswordForm
							onSubmit={onResetPassword}
							isRequesting={isRequesting}
						/>
					</View>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default ResetPasswordContainer
