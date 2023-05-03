import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import ScrollToTop from './ScrollToTop';
import Cambridge from "./pages/cambridge/Cambridge";
import Programming from "./pages/programming/programming";
import Swahili from "./pages/kiswahili/Swahili";

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cambridge" element={<Cambridge/>}/>
      <Route path="/programming" element={<Programming/>}/>
      <Route path="/swahili" element={<Swahili/>}/>
    </Routes>
    </>
  

  );
}

export default App;
