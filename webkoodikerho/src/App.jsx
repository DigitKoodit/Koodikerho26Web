import './App.css'
import Kortti from './Kortti'
import { useState } from 'react'
 
function App() {
  const [laskuri, setLaskuri] = useState(0)

  return (
    <div>
      <h1>Koodikerho</h1>
      <Kortti nimi="Matopeli" kuvaus="Jea jea matopeli jee" />
      <Kortti nimi="Nettisivut" kuvaus="Jea jea nettisivut jee" />
      <Kortti nimi="Isompi projekti" kuvaus="Jea jea isompi projekti jee" />
      <h1>Klikkauslaskuri</h1>
      <button onClick={() => setLaskuri(laskuri + 1)}>
        Klikkauksia: {laskuri}
      </button>
    </div>
  )
}
 
export default App