import { useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

function AuthComponent({ children }) {
    const { role } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!role) navigate("/login")
    }, [navigate, role])

    return children
}

export default AuthComponent
