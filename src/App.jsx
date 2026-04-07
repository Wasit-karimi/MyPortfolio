import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { NOTFOUND } from 'dns'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NOTFOUND />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
