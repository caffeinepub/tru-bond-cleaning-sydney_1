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
import Bondi from "./pages/suburbs/Bondi";
import Burwood from "./pages/suburbs/Burwood";
import CastleHill from "./pages/suburbs/CastleHill";
import Chatswood from "./pages/suburbs/Chatswood";
import Cronulla from "./pages/suburbs/Cronulla";
import Hurstville from "./pages/suburbs/Hurstville";
import Kogarah from "./pages/suburbs/Kogarah";
import Liverpool from "./pages/suburbs/Liverpool";
import Manly from "./pages/suburbs/Manly";
import Newtown from "./pages/suburbs/Newtown";
import Parramatta from "./pages/suburbs/Parramatta";
import Penrith from "./pages/suburbs/Penrith";
import Pymble from "./pages/suburbs/Pymble";
import Randwick from "./pages/suburbs/Randwick";
import Strathfield from "./pages/suburbs/Strathfield";

export type Page =
  | "home"
  | "services"
  | "about"
  | "contact"
  | "bond-cleaning"
  | "carpet-cleaning"
  | "bathroom-cleaning"
  | "window-cleaning"
  | "oven-cleaning"
  | "bondi"
  | "parramatta"
  | "chatswood"
  | "manly"
  | "hurstville"
  | "newtown"
  | "randwick"
  | "cronulla"
  | "strathfield"
  | "penrith"
  | "castle-hill"
  | "liverpool"
  | "kogarah"
  | "burwood"
  | "pymble";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional scroll on page change
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
      case "bondi":
        return <Bondi navigate={setPage} />;
      case "parramatta":
        return <Parramatta navigate={setPage} />;
      case "chatswood":
        return <Chatswood navigate={setPage} />;
      case "manly":
        return <Manly navigate={setPage} />;
      case "hurstville":
        return <Hurstville navigate={setPage} />;
      case "newtown":
        return <Newtown navigate={setPage} />;
      case "randwick":
        return <Randwick navigate={setPage} />;
      case "cronulla":
        return <Cronulla navigate={setPage} />;
      case "strathfield":
        return <Strathfield navigate={setPage} />;
      case "penrith":
        return <Penrith navigate={setPage} />;
      case "castle-hill":
        return <CastleHill navigate={setPage} />;
      case "liverpool":
        return <Liverpool navigate={setPage} />;
      case "kogarah":
        return <Kogarah navigate={setPage} />;
      case "burwood":
        return <Burwood navigate={setPage} />;
      case "pymble":
        return <Pymble navigate={setPage} />;
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
