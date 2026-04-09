import { useState } from 'react'

function Kortti({ nimi, kuvaus }) {
  return (
    <div className="kortti">
      <h2>{nimi}</h2>
      <p>{kuvaus}</p>
    </div>
  )
}
 
export default Kortti