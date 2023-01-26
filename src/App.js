//import Button from './components/button/button'
import Paragraph from './components/paragraph/paragraph'

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
     
    </>
  )
}

export default App;
