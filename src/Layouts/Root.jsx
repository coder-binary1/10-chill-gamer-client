import Banner from "../components/Banner";
import BlogAndNews from "../components/BlogAndNews";
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
        <BlogAndNews></BlogAndNews>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
