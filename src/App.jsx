import './App.css'
import FortuneCard from './components/FortuneCard'
import frases from './data/phrases.json'
import { useState } from 'react'

function App() {
  const ruta = './assets/img/'
  const images = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg']

  const [index, setIndex] = useState(0)
  const nextPhrase = () => {
      if(index < frases.length -1){
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
  }
  
  return (
    <>
      <article className="article__card">
        <FortuneCard 
          data={frases[ index ]}
        />
        <div className='container__buttons'>
          <button className="message__button" onClick={nextPhrase}>Ver otro</button>
          <button className='aleat__button'>Ver aleatorias</button>
        </div>
      </article>
    </>
  )
}

export default App

