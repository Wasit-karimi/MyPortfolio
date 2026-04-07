import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
