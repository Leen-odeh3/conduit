import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home/Home";
import Settings from "../Pages/Settings/Settings";
import NewPost from "../Pages/NewPost/NewPost";
import Profile from "../Pages/Profile/Profile";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/settings" element={<Settings />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route index element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
