import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route index element={} />
        <Route path="*" element={<h1>404</h1>} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
