import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Portrait } from "./pages/portrait/Portrait";
import { Error404 } from "./pages/error404/Error404";
import { MainPage } from "./pages/MainPage";
import { LanguageProvider } from "./hooks/useLanguage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portrait />}/>
          <Route path="/home" element={<MainPage />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App
