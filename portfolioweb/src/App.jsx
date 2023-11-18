import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Portrait } from "./pages/portrait/Portrait";
import { Home } from "./pages/home/Home";
import { Error404 } from "./pages/error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portrait />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
