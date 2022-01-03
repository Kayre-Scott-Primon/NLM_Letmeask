import { createContext, ReactNode, useEffect, useState } from "react"
import { auth, firebase } from "../services/firebase"

export const AuthContext = createContext({} as AuthContextType)

//tipagem
type AuthContextType = {
     user: User | undefined;
     signInWithGoogle: () => Promise<void>
}
type User = {
     id: string;
     name: string;
     avatar: string;
}

type AuthContextProveiderProps = {
     children: ReactNode
}   

export function AuthContextProvider(props: AuthContextProveiderProps) {
     const [user, setUser] = useState<User>()

     useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
         if(user) {
           const { displayName, photoURL, uid } = user
     
           if(!displayName || !photoURL) {
             throw new Error('Missing information from google account')
           }
     
           setUser({
             id: uid,
             name: displayName,
             avatar: photoURL
           })
         }
       })
     
       return () => {
         unsubscribe();
       }
     },[])
     
     async function signInWithGoogle() {
       const provider = new firebase.auth.GoogleAuthProvider()
       const result = await auth.signInWithPopup(provider)
       if(result.user){
         const { displayName, photoURL, uid } = result.user
     
         if(!displayName || !photoURL) {
           throw new Error('Missing information from google account')
         }
     
         setUser({
           id: uid,
           name: displayName,
           avatar: photoURL
         })
       }
     }     

     return (
          <AuthContext.Provider value={{ user, signInWithGoogle }}>
               {props.children}
          </AuthContext.Provider>
     )
}