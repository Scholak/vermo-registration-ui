// Library Imports
import { Link } from 'expo-router'
import { View, Text, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'

// Component Imports
import Logo from '@/components/Atoms/Logo'
import SigninForm from '@/components/Molecules/SigninForm'
import SocialSignin from '@/components/Molecules/SocialSignin'

// Type Imports
import { ISigninSchema } from '@/types/authTypes'

type ISigninContainerProps = {
	onSignin: (formData: ISigninSchema) => void
	onFaceookSignin: Function
	onGoogleSignin: Function
	isRequesting: boolean
}

const SigninContainer = ({ onSignin, onFaceookSignin, onGoogleSignin, isRequesting }: ISigninContainerProps) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			className='flex-1 justify-center'
		>
			<TouchableWithoutFeedback
				onPress={Keyboard.dismiss}
				accessible={false}
				className='flex-1'
			>
				<View>
					<Logo />
					<SocialSignin
						onFacebookSignin={onFaceookSignin}
						onGoogleSignin={onGoogleSignin}
					/>
					<Text className='self-center font-poppins-regular text-secondary text-xl'>or</Text>
					<SigninForm
						onSubmit={onSignin}
						isRequesting={isRequesting}
					/>
					<Text className='self-center text-secondary font-poppins-medium'>
						Don’t have an account?{' '}
						<Link
							href='signup'
							className='text-primary'
						>
							Register Now
						</Link>
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default SigninContainer
