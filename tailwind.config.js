/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563EB", // Blue example
                secondary: "#16A34A", // Green example
            },
        },
    },
    plugins: [],
}
