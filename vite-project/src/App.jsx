import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.jsx'
import Navbar from './navbar.jsx'
import { db } from './firebase.js'
import {query, collection, onSnapshot} from 'firebase/firestore'
import Comida from './components/comida.jsx'
import Tarefas from './components/Tarefas.jsx'

function App() {
  const [tarefas, setTarefas] = useState(['Azul', 'Vermelho'])

  // //Ler dados do Firebase
  // useEffect(() => {
  //   const caminhoFirebase = query(collection(db, 'restaplate'))
  //   const snapshotDaDatabase = onSnapshot(caminhoFirebase, (querySnapshot) =>{
  //     let restaArray = []
  //     querySnapshot.forEach((doc) => {
  //       restaArray.push({...doc.data(), id: doc.id})
  //     });
  //     console.log("Dados do Firebase:", restaArray)
  //     setRestaplate(restaArray)
  //   })
  //   return () => snapshotDaDatabase()
  // }, [])

  return (
    <>
      <div className="background">
        <div className="container">
        <h3 className="header"> Aplicativo de Tarefas</h3>
        <form className="form">
          <input className="input" type="text" placeholder="Adicionar Tarefa"/>
          <button className="button">Icone</button>
        </form>
        
        <ul>
          {tarefas.map((tarefa, index) => (
            <Tarefas key={index} tarefa={tarefa}/>
          ))}
    
        
        </ul>
        <p className="contagem"> Você tem 2 tarefas</p>

        </div>
      </div>





{/* 

  //   
  //     <Navbar/>
  
  //     {/* <ul style={{border: "4px solid red"}}>
  //       {restaplate.map((comida, index) => {
  //         console.log("Comida individual:", comida);
  //         <Comida key={index} nomeComida={comida.nomeComida}/>
  //       }
  //       )}
        
  //     </ul> 
       <ul>
         {restaplate.map((comida, index) => (
  //         <li key={index}>{comida.nomeComida || "Dado não encontrado"}</li>
  //       ))}
  //     </ul>   */}
    </>
  )
}

export default App
