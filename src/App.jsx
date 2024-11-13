import TopBar from "./components/TopBar"
import OnDisplay from "./components/OnDisplay"
import Sessions from "./components/Sessions"
import Seats from "./components/Seats"
import Reservation from "./components/Reservation"
import styled from "styled-components"


function App() {

  return (
    <Container>
       <TopBar />
       <OnDisplay />
      {/*<Sessions />*/}
      {/*<Seats />*/}
      {/*<Reservation />*/}
    </Container>
  )
}

export default App


const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;

`
  

