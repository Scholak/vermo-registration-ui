// Library Imports
import { View, Text, Image } from 'react-native'

const logo = require('@/assets/logo.png')

const Logo = () => {
	return (
		<View className='gap-4'>
			<Image
				className='self-center max-w-[132px]'
				resizeMode='contain'
				source={logo}
			/>
			<Text className='self-center text-4xl font-poppins-bold'>Vermo</Text>
		</View>
	)
}

export default Logo
