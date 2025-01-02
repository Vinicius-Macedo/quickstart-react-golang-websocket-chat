import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./partials/header";
import { Index } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
