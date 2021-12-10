import ErrorPage from "./components/Body/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Body/Home";
import Need from "./components/Body/Need";
import Donate from "./components/Body/Donate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Popup from "./components/Body/pop/Popup";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/need-blood" element={<Need />} />
          <Route path="/donate-blood" element={<Donate />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/popup" element={<Popup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
