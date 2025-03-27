import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "../../context/AuthContext"

// eslint-disable-next-line react/prop-types
function AppProvider({ children }) {
    return (
        <BrowserRouter>
            <AuthProvider>
                {children}
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppProvider
