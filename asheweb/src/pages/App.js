
import Header from "../components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inici from "./inici/inici";
import Footer from "../components/footer/footer";
import Moments from "../pages/moments/moments";
import Madrid from "./moments/madrid/madrid";
import Milan from "./moments/milan/milan";
import Lost from "./moments/lost/lost";
import Graduacio from "./moments/graduacio/graduacio"
import "../styles/App.css";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<Inici />} />
        <Route path="/moments" element={<Moments />} />
          <Route path="/moments/madrid" element={<Madrid />} /> 
          <Route path="/moments/Milan" element={<Milan />} />
          <Route path="/moments/Lost" element={<Lost />} />
          <Route path="/moments/graduacio" element={<Graduacio />}/>
        </Routes>       
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
