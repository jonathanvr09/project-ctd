
import {createContext, useState, useContext} from "react"

export const authContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState (JSON.parse(localStorage.getItem("user") ?? "null"))

return <authContext.Provider value={{user, setUser}}>
    {children}
</authContext.Provider>
}

export default function useAuth (){
    const auth = useContext(authContext)
    
    return auth


}