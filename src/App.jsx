import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="*" element={<>Not found</>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
