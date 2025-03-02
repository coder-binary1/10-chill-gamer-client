import Banner from "../components/Banner";
import BLogAndNews from "../components/BLogAndNews";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import TrendingGames from "../components/TrendingGames";
import TrustedPartners from "../components/TrustedPartners";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <TrendingGames></TrendingGames>
        <TrustedPartners></TrustedPartners>
        <BLogAndNews></BLogAndNews>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
