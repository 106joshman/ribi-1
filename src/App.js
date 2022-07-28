import ErrorPage from "./components/Body/not-found";
// import Footer from "./components/footer";
import Footer from './components/Footer'
import Header from "./components/header";
import Home from "./components/Body/home";
import Need from "./components/Body/Need";
// import Donate from "./components/Body/Donate";
import Bio from "./components/Body/Bio";
import Request from "./components/Body/Request";
import Edit from "./components/Body/Edit";
import Privacy from "./components/Body/Privacy";
import Signin from "./components/Body/Modal/Signin";
import Signup from "./components/Body/Modal/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Popup from "./components/Body/pop/Popup";
// import DonorInfo from "./components/Body/donee-verify-request";
import Contact from "./components/Body/Contact";
import Insight from "./components/Body/Insight";
import "sweetalert2/src/sweetalert2.scss";
import DonorInfoRequest from "./components/Body/donor_info_request";
// import Menu from "./components/Body/pop/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/need-blood" element={<Need />} />

          {/* --------------------------------------------------------------
          Kindly update If this will be a pop up when it is clicked by the donee
          when a search is made or when the names are displayed on the donate blood page
          -------------------------------------------------------------- */}

          {/* <Route path="/bio/:id" element={<Bio />} /> */}
          <Route path="/bio" element={<Bio />} />
          <Route path="/request" element={<Request />} />
          <Route path="/donor-request/:id" element={<DonorInfoRequest />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* <Route path="/popup" element={<Popup />} /> */}
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/insights" element={<Insight />} />
          {/* <Route path="/donor-verify" element={<DonorInfo />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
<Footer/>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
