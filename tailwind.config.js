/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Anton', 'sans-serif'],
                script: ['Oleo Script', 'cursive'],
            },
            colors: {
                brown: '#4a2c2a',
                darkBrown: '#2b1d1a',
                cream: '#f9f5e8',
                caramel: '#d98e46',
                lightBrown: '#6d4c41',
                offWhite: '#fffdf5',
            },
        },
    },
    plugins: [],
}
