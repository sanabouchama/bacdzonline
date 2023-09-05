import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Modules } from "./pages/modules";
import { StudentBar } from "./components/studentBar";
import NavBar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <StudentBar />
        <Modules />

        <Routes>
          <Route path="" element={""} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
