// Library Imports
import { useState } from 'react'
import { useRouter } from 'expo-router'

// Component Imports
import ScrollLayout from '@/components/Atoms/ScrollLayout'
import ResetPasswordContainer from '@/components/Organisms/ResetPasswordContainer'

const ResetPassword = () => {
	const router = useRouter()

	const [isRequesting, setIsRequesting] = useState<boolean>(false)

	const handleForgotPassword = (email: string) => {
		setIsRequesting(true)

		setTimeout(() => {
			router.push('/')
			setIsRequesting(false)
		}, 3000)
	}

	return (
		<ScrollLayout>
			<ResetPasswordContainer
				isRequesting={isRequesting}
				onResetPassword={handleForgotPassword}
			/>
		</ScrollLayout>
	)
}

export default ResetPassword
