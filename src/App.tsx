//pages
import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

// rotas
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// context

//servidor
import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rooms/new" element={<NewRoom/>} />
          <Route path="/rooms/:id" element={<Room/>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
