// Library Imports
import { View } from 'react-native'

// Component Imports
import SocialSigninButton from '@/components/Atoms/SocialSigninButton'

const facebookIcon = require('@/assets/facebookIcon.png')
const googleIcon = require('@/assets/googleIcon.png')

type ISocialSigninProps = {
	onFacebookSignin: Function
	onGoogleSignin: Function
}

const SocialSignin = ({ onFacebookSignin, onGoogleSignin }: ISocialSigninProps) => {
	return (
		<View className='flex-row gap-4 my-2 px-1'>
			<SocialSigninButton
				icon={facebookIcon}
				text='Facebook'
				onPress={onFacebookSignin}
			/>
			<SocialSigninButton
				icon={googleIcon}
				text='Google'
				onPress={onGoogleSignin}
			/>
		</View>
	)
}

export default SocialSignin
