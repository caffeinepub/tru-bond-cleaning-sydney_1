import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BathroomCleaning from "./pages/services/BathroomCleaning";
import BondCleaning from "./pages/services/BondCleaning";
import CarpetCleaning from "./pages/services/CarpetCleaning";
import OvenCleaning from "./pages/services/OvenCleaning";
import WindowCleaning from "./pages/services/WindowCleaning";

export type Page =
  | "home"
  | "services"
  | "about"
  | "contact"
  | "bond-cleaning"
  | "carpet-cleaning"
  | "bathroom-cleaning"
  | "window-cleaning"
  | "oven-cleaning";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home navigate={setPage} />;
      case "services":
        return <Services navigate={setPage} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "bond-cleaning":
        return <BondCleaning navigate={setPage} />;
      case "carpet-cleaning":
        return <CarpetCleaning navigate={setPage} />;
      case "bathroom-cleaning":
        return <BathroomCleaning navigate={setPage} />;
      case "window-cleaning":
        return <WindowCleaning navigate={setPage} />;
      case "oven-cleaning":
        return <OvenCleaning navigate={setPage} />;
      default:
        return <Home navigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header navigate={setPage} currentPage={page} />
      <main>{renderPage()}</main>
      <Footer navigate={setPage} />
      <WhatsAppButton />
    </div>
  );
}
