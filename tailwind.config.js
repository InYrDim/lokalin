/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#18590d",
					secondary: "#2076ac",
					accent: "#F5F5F5",
					neutral: "#161216",
					"base-100": "#f5f5f5",
					info: "#F5F5F5",
					success: "#18590d",
					warning: "#ff9400",
					error: "#b53331",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
