// Library Imports
import { useState } from 'react'
import { useRouter } from 'expo-router'

// Component Imports
import ScrollLayout from '@/components/Atoms/ScrollLayout'
import ForgotPasswordContainer from '@/components/Organisms/ForgotPasswordContainer'

const ForgetPassword = () => {
	const router = useRouter()

	const [isRequesting, setIsRequesting] = useState<boolean>(false)

	const handleForgotPassword = (email: string) => {
		setIsRequesting(true)

		setTimeout(() => {
			router.push('/reset-password')
			setIsRequesting(false)
		}, 3000)
	}

	return (
		<ScrollLayout>
			<ForgotPasswordContainer
				isRequesting={isRequesting}
				onForgotPassword={handleForgotPassword}
			/>
		</ScrollLayout>
	)
}

export default ForgetPassword
