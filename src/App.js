import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Document from "./components/document";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/document" exact element={<Document />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
