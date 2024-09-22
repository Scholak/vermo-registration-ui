// Library Imports
import { useState } from 'react'
import Toast from 'toastify-react-native'

// Component Imports
import ScrollLayout from '@/components/Atoms/ScrollLayout'
import SigninContainer from '@/components/Organisms/SigninContainer'

// Type Imports
import { ISigninSchema } from '@/types/authTypes'

const Home = () => {
	const [isRequesting, setIsRequesting] = useState<boolean>(false)

	const handleSignin = (formData: ISigninSchema) => {
		setIsRequesting(true)

		setTimeout(() => {
			Toast.success(`Signed in as ${formData.email}`)
			setIsRequesting(false)
		}, 3000)
	}

	const handleFaceookSignin = () => {
		Toast.success('Facebook Signin')
	}

	const handleGoogleSignin = () => {
		Toast.success('Google Signin')
	}

	return (
		<ScrollLayout>
			<SigninContainer
				onSignin={handleSignin}
				onFaceookSignin={handleFaceookSignin}
				onGoogleSignin={handleGoogleSignin}
				isRequesting={isRequesting}
			/>
		</ScrollLayout>
	)
}

export default Home
