import { Component } from "react"

import './App.css'

import Card from './components/Card'

function App() {

  return (
    <>
    <div className="bg-green-400 text-black p-4 rounded-xl">
      Tailwind Test
    </div>
    <Card username="chaiaurcode" btnText="click me"/> 
    <Card username="rahul" btnText="visit me"/>   
</>
  )
}

export default App


