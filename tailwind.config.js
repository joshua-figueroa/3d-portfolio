/** @type {import('tailwindcss').Config} */
// Palette from https://colorhunt.co/palette/070f2b1b1a55535c919290c3
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#050816",
				secondary: "#9290C3",
				tertiary: "#070F2B",
				violet: "#535C91",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
			},
		},
	},
	plugins: [],
};
