// Library Imports
import { useState } from 'react'
import { useRouter } from 'expo-router'

// Component Imports
import ScrollLayout from '@/components/Atoms/ScrollLayout'
import SignupContainer from '@/components/Organisms/SignupContainer'

// Type Imports
import { ISignupSchema } from '@/types/authTypes'

const Signup = () => {
	const router = useRouter()

	const [isRequesting, setIsRequesting] = useState<boolean>(false)

	const handleSignup = (formData: ISignupSchema) => {
		setIsRequesting(true)

		setTimeout(() => {
			router.push('/verify-phone')
			setIsRequesting(false)
		}, 3000)
	}

	return (
		<ScrollLayout>
			<SignupContainer
				isRequesting={isRequesting}
				onSignup={handleSignup}
			/>
		</ScrollLayout>
	)
}

export default Signup
