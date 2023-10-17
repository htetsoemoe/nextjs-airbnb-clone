import '@styles/globals.css'

export const metadata = {
    title: "Airbnb",
    description: "Creating Airbnb Clone"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout

