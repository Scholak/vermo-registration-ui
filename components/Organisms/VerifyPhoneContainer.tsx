// Library Imports
import { useState } from 'react'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'

// Component Imports
import Button from '@/components/Atoms/Button'
import BackButton from '@/components/Atoms/BackButton'
import DigitInput from '@/components/Atoms/DigitInput'

type IVerifyPhoneContainerProps = {
	onVerifyPhone: (code: string) => void
	isRequesting: boolean
}

const VerifyPhoneContainer = ({ onVerifyPhone, isRequesting }: IVerifyPhoneContainerProps) => {
	const [code, setCode] = useState<string>('')

	return (
		<TouchableWithoutFeedback
			onPress={Keyboard.dismiss}
			accessible={false}
			className='flex-1'
		>
			<View className='flex-1 pt-8'>
				<BackButton />
				<View className='gap-12 mt-16 mb-auto'>
					<Text className='self-center font-poppins-bold text-3xl'>
						Enter 4 digit code sent to you at <Text className='text-primary'>45621386</Text>
					</Text>
					<DigitInput onChange={code => setCode(code)} />
					<Button
						text='Verify'
						onPress={() => onVerifyPhone(code)}
						className='font-poppins-regular mt-4'
						disabled={isRequesting || code.length !== 4}
					/>
					<View>
						<Text className='text-secondary text-center font-poppins-medium'>Didn’t recieve a verification code?</Text>
						<Text className='text-primary text-center font-poppins-medium'>Resend Code | Change Number</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default VerifyPhoneContainer
