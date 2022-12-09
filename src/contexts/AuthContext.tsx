import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ProviderProps } from "../@types/ProviderProps";
import { User } from "../@types/user";
import { useDebounce } from "../hooks/useDebounce";
import { getProfile } from "../services/api";

interface AuthContextType {
    signed: boolean;
    user: User | null;
    token: string;
    setUser(user: User | null): void;
    setToken(token: string): void;
    logout(): void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState('');
    const {debounce} = useDebounce();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storagedToken = localStorage.getItem("access_token")
            if (storagedToken) {
                try {
                    debounce(() => {
                        verifyToken(storagedToken)
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }, [debounce])


    function logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user")
        delete axios.defaults.headers.Authorization;
        setUser(null)
        setToken('')
    }

    async function verifyToken (token: string) {
         await getProfile(token).then(response => {
            localStorage.setItem("user", JSON.stringify(response))
            setUser(response)
            setToken(token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }).catch(() => {
            logout()
        })
    }

    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            user,
            token,
            logout,
            setUser,
            setToken,
        }}>
            {children}
        </AuthContext.Provider>
    )
}