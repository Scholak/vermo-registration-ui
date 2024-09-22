// Library Imports
import { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'

// Utility Imports
import { cn } from '@/helpers/cn'

const data = [{ label: '+90', value: '90' }]

type IPhoneInputTypes = {
	onChange: any
	defaultValue?: {
		code: string
		value: string
	}
	error?: string
	placeholder?: string
	style?: StyleProp<TextStyle>
	className?: string
}

const PhoneInput = ({ onChange, defaultValue, error, style, className }: IPhoneInputTypes) => {
	const [code, setCode] = useState<string>(defaultValue?.code ?? '90')
	const [value, setValue] = useState<string>(defaultValue?.value ?? '')
	const [isFocus, setIsFocus] = useState<boolean>(false)

	const handleChangeValue = (value: string) => {
		setValue(value)
		onChange({ code, value })
	}

	return (
		<View>
			<View className={cn('flex-row gap-1 border-b border-secondary py-1', !!error && 'border-red-500', className)}>
				<Dropdown
					mode='modal'
					style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
					placeholderStyle={styles.placeholderStyle}
					selectedTextStyle={styles.selectedTextStyle}
					inputSearchStyle={styles.inputSearchStyle}
					containerStyle={styles.container}
					itemContainerStyle={styles.itemContainerStyle}
					iconStyle={styles.iconStyle}
					data={data}
					search
					maxHeight={300}
					labelField='label'
					valueField='value'
					searchPlaceholder='Search...'
					value={code}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onChange={item => {
						setCode(item.value)
						setIsFocus(false)
						onChange({ code: item.value, value })
					}}
				/>
				<TextInput
					onChangeText={handleChangeValue}
					defaultValue={value}
					style={style}
					keyboardType='phone-pad'
					cursorColor='#DAD3D4'
					selectionColor='#DAD3D4'
					className='flex-1 placeholder:font-poppins-regular'
					placeholder='Phone Number'
					maxLength={10}
				/>
			</View>
			{!!error && <Text className='text-red-500 text-sm font-poppins-medium '>{error}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		padding: 16,
		width: '50%',
	},
	itemContainerStyle: {
		backgroundColor: 'red',
	},
	dropdown: {
		height: 30,
		width: 60,
	},
	placeholderStyle: {
		fontSize: 14,
	},
	selectedTextStyle: {
		fontSize: 14,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 14,
	},
})

export default PhoneInput
