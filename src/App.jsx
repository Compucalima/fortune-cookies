import './App.css'
import FortuneCard from './components/FortuneCard'
import frases from './data/phrases.json'
import { useState } from 'react'
function App() {
  const rutaBase = '/img/'
  const images = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg']
  const [index, setIndex] = useState(0)
  const nextPhrase = () => {
      if(index < frases.length -1){
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
  }
  let rutaCompleta = rutaBase + images[Math.floor(Math.random() * images.length)]
  const articleCardStyle = {
    backgroundImage: `url(${rutaCompleta})`,
  };
  return (
    <>
      <article className='article__card' style={articleCardStyle}>
        <FortuneCard 
          data={frases[ Math.floor(Math.random() * index) ]} 
        />
        <div className='container__buttons'>
          <button className="message__button" onClick={nextPhrase}>Ver fortuna</button>
        </div>
      </article>
    </>
  )
}
export default App