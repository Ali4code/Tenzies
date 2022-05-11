import { useState } from "react";
import Game from "./components/Game";
import Header from "./components/Header";
import {nanoid} from "nanoid"
import { data } from "./Data"

function App() {

  const [tenzies , setTenzies] = useState("Roll")

  const [diced, setDiced] = useState(data)

  function randNumber() {
    return Math.floor(Math.random() * 7)
  }

  function submiting(id) {
    setDiced(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          return { ...item, submited:!item.submited }
        }
        else {
          return item
        }
      })

    })
  const same = (currentValue) => currentValue.number === diced[0].number ;
  if (diced.every(same)) {
    setTenzies("Tenzies, Refresh")
  } }

  let games = diced.map(item => {
    return <Game key={item.id} id={item.id} number={item.number} submiting={submiting} />
  })


  function roll() {
    if (tenzies === "Tenzies, Refresh" ) {
      window.location.reload();
    }
    setDiced(prevState => {
      return prevState.map(item => {
        if (item.submited) {
          return item;
        }
        else {
          return { ...item, number: randNumber() }
        }
      })
    }

    )
  }

  return (
    <div className="App">
      <Header />
      <div className="games-container">{games}</div>
      <button
        className='roll'
        onClick={roll}>
        {tenzies}
      </button>
    </div>
  );
}

export default App;
