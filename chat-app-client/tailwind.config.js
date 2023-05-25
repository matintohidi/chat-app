/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Asap: ["Asap"],
                Inter: ["Inter"],
                InterRegular: ["InterRegular"],
                PoppinsBold: ["PoppinsBold"]
            },
            colors: {
                primary: "#615EF0",
                secondary: "#EFEFFD",
                customGray: "#F1F1F1",
                primaryText: "#1E2531"
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
