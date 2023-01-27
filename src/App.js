//import Button from './components/button/button'
import Paragraph from './components/paragraph/paragraph'
import Buttons from './components/buttons/buttons'

import './App.css'


const changeTextColor = () => {
  const p = document.querySelector('.paragraph')
  p.style.color = 'blue'
  p.style.textTransform = 'uppercase'
}

function App() {
  return (
    <>
      <Paragraph changeTextColor={changeTextColor}/>
      <Buttons/>
    </>
  )
}

export default App;
