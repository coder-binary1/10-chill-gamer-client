import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ThemeProvider from "../Providers/ThemeProvider";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <ThemeProvider>
          <Navbar></Navbar>
        </ThemeProvider>
      </header>
      <main className="grow">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
