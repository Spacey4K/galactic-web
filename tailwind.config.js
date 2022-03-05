module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "text-primary": "var(--text-primary)",
                "text-secondary": "var(--text-secondary)",
                "bg-primary": "var(--bg-primary)",
                "bg-secondary": "var(--bg-secondary)",
                "brand": "var(--brand)",
                "transparent": "var(--transparent)",
            },
        },
    },
    plugins: [],
}