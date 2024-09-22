// Library Imports
import { ReactNode } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

type IScrollLayoutProps = {
	children: ReactNode
}

const ScrollLayout = ({ children }: IScrollLayoutProps) => {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
			showsVerticalScrollIndicator={false}
		>
			{children}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#ffffff',
	},
})

export default ScrollLayout
