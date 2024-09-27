/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Figtree': ['Figtree, sans'],
				'Cocogoose': ['Cocogoose', 'sans-serif']
			},	
			fontWeight: {
				thin: 300,
				normal: 400,
				bold: 700,
			},
			fontStyle: {
				italic: 'italic'
			}
		},
	},
	plugins: [],
}
