// Library Imports
import { useRef, useState } from 'react'
import { View, TextInput, TextInputKeyPressEventData, NativeSyntheticEvent } from 'react-native'

type IDigitInputProps = {
	onChange: (code: string) => void
}

const DigitInput = ({ onChange }: IDigitInputProps) => {
	const firstDigitRef = useRef<TextInput>(null)
	const secondDigitRef = useRef<TextInput>(null)
	const thirdDigitRef = useRef<TextInput>(null)
	const fourthDigitRef = useRef<TextInput>(null)

	const [code, setCode] = useState<string>('')

	const handleChangeDigit = (digit: string, index: number) => {
		switch (index) {
			case 1:
				if (digit) {
					secondDigitRef.current?.focus()
					firstDigitRef.current?.setNativeProps({ editable: false })
					setCode(digit)
					onChange(digit)
				}
				break

			case 2:
				if (digit) {
					thirdDigitRef.current?.focus()
					secondDigitRef.current?.setNativeProps({ editable: false })
					setCode(`${code}${digit}`)
					onChange(`${code}${digit}`)
				}
				break

			case 3:
				if (digit) {
					fourthDigitRef.current?.focus()
					thirdDigitRef.current?.setNativeProps({ editable: false })
					setCode(`${code}${digit}`)
					onChange(`${code}${digit}`)
				}
				break

			case 4:
				if (digit) {
					setCode(`${code}${digit}`)
					onChange(`${code}${digit}`)
				}
				break
		}
	}

	const handleDeleteDigit = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
		if (event.nativeEvent.key === 'Backspace') {
			const newCode = code.slice(0, index - 1)
			setCode(newCode)
			onChange(newCode)

			switch (index) {
				case 2:
					firstDigitRef.current?.setNativeProps({ editable: true })
					secondDigitRef.current?.setNativeProps({ text: '' })
					setTimeout(() => {
						firstDigitRef.current?.focus()
					}, 1)
					break

				case 3:
					secondDigitRef.current?.setNativeProps({ editable: true })
					thirdDigitRef.current?.setNativeProps({ text: '' })
					setTimeout(() => {
						secondDigitRef.current?.focus()
					}, 1)
					break

				case 4:
					thirdDigitRef.current?.setNativeProps({ editable: true })
					fourthDigitRef.current?.setNativeProps({ text: '' })
					setTimeout(() => {
						thirdDigitRef.current?.focus()
					}, 1)
					break
			}
		}
	}

	return (
		<View className='flex-row justify-between'>
			<TextInput
				ref={firstDigitRef}
				maxLength={1}
				keyboardType='numeric'
				cursorColor='#DAD3D4'
				selectionColor='#DAD3D4'
				onKeyPress={event => handleDeleteDigit(event, 1)}
				onChangeText={(digit: string) => handleChangeDigit(digit, 1)}
				className='w-16 h-24 border-b border-secondary text-6xl text-center text-black'
			/>
			<TextInput
				ref={secondDigitRef}
				maxLength={1}
				keyboardType='numeric'
				cursorColor='#DAD3D4'
				selectionColor='#DAD3D4'
				onKeyPress={event => handleDeleteDigit(event, 2)}
				onChangeText={(digit: string) => handleChangeDigit(digit, 2)}
				className='w-16 h-24 border-b border-secondary text-6xl text-center text-black'
			/>
			<TextInput
				ref={thirdDigitRef}
				maxLength={1}
				keyboardType='numeric'
				cursorColor='#DAD3D4'
				selectionColor='#DAD3D4'
				placeholderTextColor='#000000'
				onKeyPress={event => handleDeleteDigit(event, 3)}
				onChangeText={(digit: string) => handleChangeDigit(digit, 3)}
				className='w-16 h-24 border-b border-secondary text-6xl text-center text-black'
			/>
			<TextInput
				ref={fourthDigitRef}
				maxLength={1}
				keyboardType='numeric'
				cursorColor='#DAD3D4'
				selectionColor='#DAD3D4'
				onKeyPress={event => handleDeleteDigit(event, 4)}
				onChangeText={(digit: string) => handleChangeDigit(digit, 4)}
				className='w-16 h-24 border-b border-secondary text-6xl text-center text-black'
			/>
		</View>
	)
}

export default DigitInput
