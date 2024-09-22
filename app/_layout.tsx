// Library Imports
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ToastManager from 'toastify-react-native'

// Style Imports
import '../global.css'

const { width } = Dimensions.get('window')

const Layout = () => {
	const [loaded, error] = useFonts({
		PoppinsBold: require('@/fonts/Poppins-Bold.ttf'),
		PoppinsExtraBold: require('@/fonts/Poppins-ExtraBold.ttf'),
		PoppinsLight: require('@/fonts/Poppins-Light.ttf'),
		PoppinsMedium: require('@/fonts/Poppins-Medium.ttf'),
		PoppinsRegular: require('@/fonts/Poppins-Regular.ttf'),
		PoppinsThin: require('@/fonts/Poppins-Thin.ttf'),
	})

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) {
		return null
	}

	return (
		<SafeAreaView style={styles.container}>
			<ToastManager
				duration={5000}
				animationStyle='rightInOut'
				showProgressBar={false}
				showCloseIcon={false}
				width={width * 0.9}
			/>
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default Layout
