import TopBar from "./components/TopBar"
import OnDisplay from "./components/OnDisplay"
import Sessions from "./components/Sessions"
import Seats from "./components/Seats"
import Reservation from "./components/Reservation"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<OnDisplay />} />
          <Route path="/sessoes/:idFilme" element={<Sessions />} />
          <Route path="/assentos/:idSessao" element={<Seats />} />
          <Route path="/sucesso" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
 