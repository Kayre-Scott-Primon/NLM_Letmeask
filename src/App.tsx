//pages
import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

// rotas
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// context

//servidor
import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rooms/new" element={<NewRoom/>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
