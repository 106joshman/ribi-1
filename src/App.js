import ErrorPage from "./components/Body/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Body/Home";
import Need from "./components/Body/Need";
import Donate from "./components/Body/Donate";
import Bio from "./components/Body/Bio";
import Signin from "./components/Body/Modal/Signin";
import Signup from "./components/Body/Modal/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/need-blood" element={<Need />} />
          <Route path="/donate-blood" element={<Donate />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
