module.exports = {
	purge: {
		enabled: false, // turn it to false in developement to have all tailwind classes
		content: ['./src/*.js', './src/*.jsx', './src/**/*.jsx', './src/**/*.js']
	},
	theme: {
		extend: {}
	},
	variants: {},
	/* eslint-disable */
	plugins: [require('@tailwindcss/forms')]
}
