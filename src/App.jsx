import { BrowserRouter, Route, Routes,  } from "react-router-dom"

import Nav from "./assets/components/Nav"
import Home from "./assets/pages/home/Home"



BrowserRouter
function App() {
  return (
    <div>
      <Nav/>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
   </Routes>
   </BrowserRouter> 
    </div>
    
  )
}

export default App
