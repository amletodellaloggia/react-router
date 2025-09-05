import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/chisiamo" element={<ChiSiamo />}></Route>
          <Route path="/prodotti" element={<Prodotti />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
