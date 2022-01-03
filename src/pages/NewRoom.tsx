import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

// styles scss
import '../styles/auth.scss'

//componentes
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

// context

export function NewRoom() {
     const { user } = useAuth()
     return (
          <div id="page-auth">
               <aside>
                    <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                    <strong>Crie sala de Q&amp;A ao vivo</strong>
                    <p>Tire as duvidas de sua audiencia em tempo-real</p>
               </aside>
               <main>
                    <div className='main-content'>
                         <img src={logoImg} alt="Letmeask"/>
                         <h1>{user?.name}</h1>
                         <h2>Criar uma nova sala</h2>
                         <form>
                              <input 
                                   type="text" 
                                   placeholder='Nome da sala'
                              />
                              <Button type="submit">
                                   Criar sala
                              </Button>
                         </form>
                         <p>Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link></p>
                    </div>
               </main>
          </div>
     )
}