// Library Imports
import { View, Text, Pressable, Image, ImageSourcePropType } from 'react-native'

type ISocialSigninButtonProps = {
	icon: ImageSourcePropType
	text: string
	onPress: any
}

const SocialSigninButton = ({ icon, text, onPress }: ISocialSigninButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			className='flex-1'
		>
			<View className='h-12 w-full flex-row items-center justify-center gap-2 bg-white shadow-lg rounded-lg'>
				<Image
					source={icon}
					resizeMode='contain'
					className='w-5 h-5'
				/>
				<Text className='translate-y-0.5 font-poppins-regular'>{text}</Text>
			</View>
		</Pressable>
	)
}

export default SocialSigninButton
