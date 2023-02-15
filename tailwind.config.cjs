/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				textgrey: "#20262E",
				textyellow: "yellow",
				textblue: "#058fff",
			}
		},
		borderWidth: {
			DEFAULT: "1px",
			"0": "0",
			"0.5": "0.5px",
			"1": "1px",
			"2": "2px",
			"3": "3px",
			"4": "4px",
			"6": "6px",
			"8": "8px",
		},
		boxShadow: {
			"input": "0px 5px 25px 0px rgb(0 0 0 / 40%)",
		},
	},
	plugins: [],
}
