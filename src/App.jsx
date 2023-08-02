import GlobalStyle from "./common/resetGlobal-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error from "./fetch/error";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:jobSlug" element={<Details />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
