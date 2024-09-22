// Library Imports
import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'

const BackButton = () => {
	const router = useRouter()

	return (
		<Pressable
			onPress={() => router.back()}
			className='self-left'
		>
			<Entypo
				name='chevron-left'
				size={32}
				color='black'
			/>
		</Pressable>
	)
}

export default BackButton
