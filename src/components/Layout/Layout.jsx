import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ theme, toggleTheme }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 mt-16 md:mt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
