import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './navbar.jsx'
import Navbar from './navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './firebase.js'
import {query, collection, onSnapshot} from 'firebase/firestore'
import Comida from './components/comida.jsx'

function App() {
  const [restaplate, setRestaplate] = useState([])


  //Ler dados do Firebase
  useEffect(() => {
    const caminhoFirebase = query(collection(db, 'restaplate'))
    const snapshotDaDatabase = onSnapshot(caminhoFirebase, (querySnapshot) =>{
      let restaArray = []
      querySnapshot.forEach((doc) => {
        restaArray.push({...doc.data(), id: doc.id})
      });
      console.log("Dados do Firebase:", restaArray)
      setRestaplate(restaArray)
    })
    return () => snapshotDaDatabase()
  }, [])

  return (
    <>
      <Navbar/>

      {/* <ul style={{border: "4px solid red"}}>
        {restaplate.map((comida, index) => {
          console.log("Comida individual:", comida);
          <Comida key={index} nomeComida={comida.nomeComida}/>
        }
        )}
        
      </ul> */}
      <ul>
        {restaplate.map((comida, index) => (
          <li key={index}>{comida.nomeComida || "Dado não encontrado"}</li>
        ))}
      </ul>

      
    </>
  )
}

export default App
