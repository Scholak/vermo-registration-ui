/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],

	theme: {
		extend: {
			colors: {
				primary: '#FF003D',
				secondary: '#DAD3D4',
			},
			fontFamily: {
				'poppins-bold': ['PoppinsBold'],
				'poppins-extra-bold': ['PoppinsExtraBold'],
				'poppins-light': ['PoppinsLight'],
				'poppins-medium': ['PoppinsMedium'],
				'poppins-regular': ['PoppinsRegular'],
				'poppins-thin': ['PoppinsThin'],
			},
		},
	},
	plugins: [],
}
