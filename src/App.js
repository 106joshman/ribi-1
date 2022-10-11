import ErrorPage from "./components/Body/not-found";
import Home from "./components/Body/home";
import About from "./components/Body/About";
import Bio from "./components/Body/userBio";
import Need from "./components/Body/NeedBlood";
import Edit from "./components/Body/UserEdit";
import Privacy from "./components/Body/Privacy";
import Signin from "./components/Body/Modal/Signin";
import Signup from "./components/Body/Modal/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Body/Contact";
import Insight from "./components/Body/Insight";
import "sweetalert2/src/sweetalert2.scss";
import DonorInfoRequest from "./components/Body/donor_info_request";
import WithoutNav from "./components/header/navheaders/WithoutNav";
import { WithNav } from "./components/header/navheaders/WithNav";
import MoveUp from "./components/utils/MoveUp";
import  RecoverPassword  from "./components/Body/forgot-password/RecoverPassword";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="dashboard" element={<Bio />} />
            <Route path="recover-password/:resetToken" element={<RecoverPassword />} />
          </Route>
          <Route path="/" element={<WithNav />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="need-blood" element={<Need />} />
            <Route path="about-us" element={<About />} />
            {/* <Route path="request" element={<Request />} /> */}
            <Route path="donor-request/:id" element={<DonorInfoRequest />} />
            <Route path="edit" element={<Edit />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="insights" element={<Insight />} />
            <Route path="*" element={<ErrorPage />} />
            
          </Route>
        </Routes>
        <MoveUp />
      </div>
    </Router>
  );
}

export default App;
