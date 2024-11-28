import { useEffect, useState } from 'react'
// import {AiOutlinePlus} from 'react-icons/ai'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.jsx'
import Navbar from './navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './firebase.js'
import {query, collection, onSnapshot} from 'firebase/firestore'
import Comida from './components/comida.jsx'
import Tarefas from './components/Tarefas.jsx'

function App() {
  const [tarefas, setTarefas] = useState([])

  const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[2F80ED] to-[#1CB5E0]`,
  container: 'bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4',
  heading: 'text-3xl font-bold text-center text-gray-800 p-2',
  form: 'flex ustify-between', 
  input: 'border p-2 w-full text-xl',
  button: 'border p-4 ml-2 bg-purple-500 '
};

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
      <div className={style.bg}>
        <div className={style.container}>
        <h3 className={style.heading}> Aplicativo de Tarefas</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Adicionar Tarefa"/>
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        
        <ul>
          {tarefas.map((tarefa, index) => (
            <Tarefas key={index} tarefa={tarefa}/>
          ))}
    
        
        </ul>
        <p className={style.contagem}> Você tem 2 tarefas</p>

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
