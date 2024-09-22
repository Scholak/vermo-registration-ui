// Library Imports
import { StyleProp, Pressable, Text, ViewStyle } from 'react-native'

// Utility Imports
import { cn } from '@/helpers/cn'

type IButtonTypes = {
	color?: 'primary' | 'secondary'
	onPress: any
	text: string
	disabled?: boolean
	style?: StyleProp<ViewStyle>
	className?: string
}

const Button = ({ onPress, text, disabled, style, className }: IButtonTypes) => {
	return (
		<Pressable
			onPress={onPress}
			className={cn(disabled ? 'bg-secondary' : 'bg-primary', 'p-3 rounded-lg shadow-xl', className)}
			style={style}
		>
			<Text className='text-white font-poppins-bold text-lg text-center'>{text}</Text>
		</Pressable>
	)
}

export default Button
