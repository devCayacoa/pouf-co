module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
		},
		extend: {
			colors: {
				brown: '#413f3c',
				secondary: '#787878',
				tertiary: '#E5E5E5',
				warn: '#F8614C',
			},
			boxShadow: {
				card: '-3px 3px 7px 0 rgba(0,0,0,0.3)',
			},
			transitionProperty: {
				'max-height': 'max-height',
			},
			strokeWidth: {
				3: '3',
				4: '4',
				5: '5',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
