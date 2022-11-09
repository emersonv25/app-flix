import axios from "axios";
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { getProfile, loginUser, registerUser, updateProfile } from "../services/api";
import useAlert from "./useAlert";

export const useAuth =() => {
    const {user, token, signed, setUser, setToken, logout} = useContext(AuthContext)
    const {setAlert} = useAlert();

    async function authLogin (username: string, password: string) {
        await loginUser(username, password).then(async response => {
            setToken(response.access_token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.access_token}`
            localStorage.setItem("access_token", response.access_token)
            await authGetProfile(response.access_token)
        }).catch(err => {
            console.log(err)
            setAlert({text: err.message, type: 'error'})
        });
    }

    async function authRegister (username: string, fullName: string, email: string, password: string){
        await registerUser(username, fullName, email, password).then(() => {
            setAlert({text: 'Usuario cadastrado com sucesso', type: 'success'})
        }).catch(err => {
            setAlert({text: 'Falha ao cadastrar usuário: ' + err.message, type: 'error'})
        })
    }
    async function authUpdateProfile (username: string, fullName: string, email: string, password: string){
        await updateProfile(username, fullName, email, password).then(response => {
            setAlert({text: 'Usuario editado com sucesso', type: 'success'})
            localStorage.setItem("user", JSON.stringify(response))
            setUser(response)
        }).catch(err => {
            setAlert({text: 'Falha ao editar usuário: ' + err.message, type: 'error'})
        })
    }
    async function authGetProfile (token: string)
    {
        await getProfile(token).then(response => {
            localStorage.setItem("user", JSON.stringify(response))
            setUser(response)

        }).catch(err => {
            logout()
            setAlert({text: err.message, type: 'error'})
        })
    }
    function authLogout () {
        logout()
        setAlert({text: 'Usuário deslogado com sucess', type: 'success'})
    }

    return { user, token, signed ,authLogin, authRegister, authLogout, authGetProfile, authUpdateProfile}
}