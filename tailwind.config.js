/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				// Secondary
				Secondary: {
					50: "#f2f8fd",
					100: "#e4f0fa",
					200: "#c4e1f3",
					300: "#90c8e9",
					400: "#55acdb",
					500: "#2f92c8",
					600: "#2076ac",
					700: "#1b5d89",
					800: "#1a4f72",
					900: "#1b435f",
					950: "#122b3f",
				},
				// Primary
				Primary: {
					50: "#f5f5f5",
					100: "#efefef",
					200: "#dcdcdc",
					300: "#bdbdbd",
					400: "#989898",
					500: "#7c7c7c",
					600: "#656565",
					700: "#525252",
					800: "#464646",
					900: "#3d3d3d",
					950: "#292929",
				},
				// Accent
				Accent: {
					50: "#edffe6",
					100: "#d7fec9",
					200: "#b1fd99",
					300: "#81f85e",
					400: "#56ee2d",
					500: "#35d40e",
					600: "#23aa06",
					700: "#1d810a",
					800: "#1b620e",
					900: "#1a5611",
					950: "#083003",
				},
			},
			fontFamily: {
				sans: ["Parkinsans", "sans-serif"],
			},
			boxShadow: {
				main: "5px 5px 0px 0px black",
			},
		},
	},
	plugins: [require("daisyui")],
};
