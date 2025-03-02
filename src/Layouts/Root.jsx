import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import TrendingGames from "../components/TrendingGames";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <TrendingGames></TrendingGames>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
