import { BrowserRouter, Route, Routes,  } from "react-router-dom"

import Nav from "./assets/components/Nav"
import Home from "./assets/pages/home/Home"
import LoginPage from "./assets/pages/auth/LoginPage"
import { Provider } from "react-redux"
store





function App() {
  return (
    <div>
      <Nav/>
   <BrowserRouter>
   <Provider store={store}>

   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<LoginPage/>} />
   </Routes>
   </Provider>
   </BrowserRouter> 
    </div>
    
  )
}

export default App
