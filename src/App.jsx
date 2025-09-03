import { useState } from 'react'
import data from "./data/data.json"

import './App.css'
import Result from "./components/Result.jsx"
import Summary from "./components/Summary.jsx"
function App() {
  
  

  let dataItem = data.map(item => {
    <Summary 
    
    />
  })

  return (
    <main>
      <Result 
        items={data}
      />
       <Summary
        items={data} 
        />
     
    </main>
  )
}

export default App
