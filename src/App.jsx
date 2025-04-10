
import Gameplay  from "./components/Gameplay";
import StartGame from "./components/StartGame";
import {useState} from "react"

function App() 
{
  const [isGameStarted,setisGameStarted]=useState(false);

  function toggleGameplay()
  {
    setisGameStarted(!isGameStarted)
  }

  return (
    <>

    { isGameStarted ? <Gameplay/> : <StartGame toggle={toggleGameplay}/>}
    </>
  )
}

export default App

