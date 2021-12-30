//pages
import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

// rotas
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// context
import { createContext, useState } from 'react'

//servidor
import { auth, firebase } from './services/firebase'

export const AuthContext = createContext({} as AuthContextType)

//tipagem
type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => void
}

type User = {
  id: string;
  name: string;
  avatar: string;
}

function App() {
  const [user, setUser] = useState<User>()

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
          auth.signInWithPopup(provider).then(result => {
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
          })
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rooms/new" element={<NewRoom/>} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
