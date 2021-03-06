import illustrationImg from '../assets/images/illustration.svg'
import letmeAskImg from '../assets/images/letmeask2.png'
import backgroundImg from '../assets/images/background.png'
import logoImg from '../assets/images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'

// styles scss
import '../styles/auth.scss'

//componentes
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

// context

export function NewRoom() {
     const { user } = useAuth()
     const [ newRoom, setNewRoom ] = useState('')
     const navigate = useNavigate();

     async function  handleCreateRoom(event: FormEvent) {
          event.preventDefault()

          if(newRoom.trim() === ''){
               return;
          }

          const roomRef = database.ref('rooms')

          const firebaseRoom = await roomRef.push({
               title: newRoom,
               authorId: user?.id,
          })

          navigate(`/rooms/${firebaseRoom.key}`)
     }

     return (
          <div id="page-auth">
               <aside>
                    <img src={backgroundImg} alt="Ilustração simbolizando perguntas e respostas"/>
                    <strong>Crie sala de Q&amp;A ao vivo</strong>
                    <p>Tire as duvidas de sua audiencia em tempo-real</p>
               </aside>
               <main>
                    <div className='main-content'>
                         <img src={letmeAskImg} alt="Letmeask"/>
                         <h1>{user?.name}</h1>
                         <h2>Criar uma nova sala</h2>
                         <form onSubmit={handleCreateRoom}>
                              <input 
                                   type="text" 
                                   placeholder='Nome da sala'
                                   onChange={event => setNewRoom(event.target.value)}
                                   value={newRoom}
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