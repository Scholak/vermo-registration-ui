// Library Imports
import { View, Text, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'

// Component Imports
import BackButton from '@/components/Atoms/BackButton'
import SignupForm from '@/components/Molecules/SignupForm'

// Type Imports
import { ISignupSchema } from '@/types/authTypes'

type ISignupContainerProps = {
	onSignup: (formData: ISignupSchema) => void
	isRequesting: boolean
}

const SignupContainer = ({ onSignup, isRequesting }: ISignupContainerProps) => {
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
					<View className='mt-12 mb-auto gap-4'>
						<Text className='mb-4 self-center font-poppins-bold text-center text-3xl'>Register to Vermo</Text>
						<SignupForm
							onSubmit={onSignup}
							isRequesting={isRequesting}
						/>
						<Text className='self-center text-center font-poppins-medium'>
							By registering you agree to <Text className='text-primary'>Terms & Conditions</Text> and{' '}
							<Text className='text-primary'>Privacy Policy</Text> of the Vermo
						</Text>
					</View>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default SignupContainer
