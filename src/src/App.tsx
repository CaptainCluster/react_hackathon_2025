import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Error404 from "./pages/Error404";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
