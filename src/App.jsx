import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TimeMachine from "./pages/TimeMachine.jsx";
import Momento1 from "./pages/Momento1.jsx";
import Momento2 from "./pages/Momento2.jsx";
import Momento3 from "./pages/Momento3.jsx";
import Momento4 from "./pages/Momento4.jsx";
export const App =() => {
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Time-machine" element={<TimeMachine/>}/>
        <Route path="/Momento1" element={<Momento1/>}/>
        <Route path="/Momento2" element={<Momento2/>}/>
        <Route path="/Momento3" element={<Momento3/>}/>
        <Route path="/Momento4" element={<Momento4/>}/>
      </Routes>
    </Router>
  )
  }

    


export default App;
