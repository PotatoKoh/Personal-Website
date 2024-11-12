import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/Pages/HomePage/Homepage";
import CursorEffect from "./Components/CursorEffect";

function App() {
  return (
    <Router>
      <div className="relative">
        <CursorEffect />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
