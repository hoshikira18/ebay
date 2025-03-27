import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { instance } from "../api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [role, setRole] = useState(() => {
        const savedRole = localStorage.getItem("role")
        return savedRole ? JSON.parse(savedRole) : null
    })

    useEffect(() => {
        // Lưu giá trị vào LocalStorage khi role thay đổi
        if (role) {
            localStorage.setItem('role', JSON.stringify(role));
        } else {
            localStorage.removeItem('role');
        }
    }, [role]);

    const login = async (username, password) => {
        await instance.get(`/users?username=${username}&password=${password}`).then(({ data }) => {
            navigate(-2)
            setRole(JSON.stringify(data));
            toast.success("Login success!")
        }).catch((error) => {
            toast.error(error.message)
        })
    };

    const logout = () => {
        setRole(null);
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{ role, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}
