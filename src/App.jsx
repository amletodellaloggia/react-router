import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

function App() {return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/chisiamo" element={<ChiSiamo />}></Route>
        <Route path="/prodotti" element={<Prodotti />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
