import ErrorPage from "./components/Body/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Body/Home";
import Need from "./components/Body/Need";
import Donate from "./components/Body/Donate";
import Bio from "./components/Body/Bio";
import Request from "./components/Body/Request";
import Signin from "./components/Body/Modal/Signin";
import Signup from "./components/Body/Modal/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Popup from "./components/Body/pop/Popup";
import Popu from "./components/Body/pop/Popu";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/need-blood" element={<Need />} />
          <Route path="/donate-blood" element={<Donate />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/request" element={<Request />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/popup" element={<Popu />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
