import MainPage from "./MainPage";
import './Home.css'
import HeroSection from "../../Component/HeroSection/HeroSection";
const Home = () => {
  return (
    <div className="hero-section">
      <HeroSection/>
      <div className="main">
        <MainPage />
      </div>
    </div>
  );
};

export default Home;
