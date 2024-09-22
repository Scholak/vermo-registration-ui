// Library Imports
import { TextInput, StyleProp, TextStyle, Text, View } from 'react-native'

// Utility Imports
import { cn } from '@/helpers/cn'

type IInputTypes = {
	type?: 'text' | 'password'
	onChange: any
	defaultValue?: string
	error?: string
	placeholder?: string
	style?: StyleProp<TextStyle>
	className?: string
}

const Input = ({ type, onChange, defaultValue, error, placeholder, style, className }: IInputTypes) => {
	return (
		<View className='gap-1'>
			<TextInput
				secureTextEntry={type === 'password'}
				onChangeText={onChange}
				defaultValue={defaultValue}
				style={style}
				cursorColor='#DAD3D4'
				selectionColor='#DAD3D4'
				className={cn(
					'border-b border-secondary py-1 placeholder:font-poppins-regular',
					!!error && 'border-red-500',
					className,
				)}
				placeholder={placeholder}
			/>
			{!!error && <Text className='text-red-500 text-sm font-poppins-medium '>{error}</Text>}
		</View>
	)
}

export default Input
