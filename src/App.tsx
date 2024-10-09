import { useEffect } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const tg = Telegram.WebApp;
  useEffect(() => {
    tg.ready();
  })


  return (
    <>
     <div>Hello world</div>
    </>
  )
}

export default App
