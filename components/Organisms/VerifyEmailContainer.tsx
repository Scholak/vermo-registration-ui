// Library Imports
import { useRouter } from 'expo-router'
import { View, Text, Image, Pressable, Linking } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

// Component Imports
import Button from '@/components/Atoms/Button'

const mailboxImg = require('@/assets/mailboxImg.png')

const VerifyEmailContainer = () => {
	const router = useRouter()

	return (
		<View className='relative flex-1 justify-center bg-white'>
			<Pressable
				onPress={() => router.push('/')}
				className='absolute top-10 right-0'
			>
				<Ionicons
					name='close'
					size={32}
					color='black'
				/>
			</Pressable>
			<View className='justify-center gap-4'>
				<Image
					className='mb-4 self-center'
					source={mailboxImg}
					resizeMode='contain'
				/>
				<Text className='text-4xl text-center font-bold'>Check Your Email</Text>
				<Text className='text-lg text-center leading-6 text-secondary'>
					we have sent you a reset password link on your registered email address
				</Text>
				<Button
					onPress={() => Linking.openURL('https://gmail.app.goo.gl')}
					text='Go to Email'
					className='mt-6'
				/>
			</View>
		</View>
	)
}

export default VerifyEmailContainer
