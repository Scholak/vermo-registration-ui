// Library Imports
import { useState } from 'react'
import { useRouter } from 'expo-router'

// Component Imports
import ScrollLayout from '@/components/Atoms/ScrollLayout'
import VerifyPhoneContainer from '@/components/Organisms/VerifyPhoneContainer'

const VerifyPhone = () => {
	const router = useRouter()

	const [isRequesting, setIsRequesting] = useState<boolean>(false)

	const handleVerifyPhone = () => {
		setIsRequesting(true)

		setTimeout(() => {
			router.push('/verify-email')
			setIsRequesting(false)
		}, 3000)
	}

	return (
		<ScrollLayout>
			<VerifyPhoneContainer
				onVerifyPhone={handleVerifyPhone}
				isRequesting={isRequesting}
			/>
		</ScrollLayout>
	)
}

export default VerifyPhone
