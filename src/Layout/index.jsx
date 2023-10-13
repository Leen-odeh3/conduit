import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from '../Component/Footer/Footer'
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;