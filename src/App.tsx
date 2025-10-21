import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import EastJava from "./pages/EastJava";
import CentralJava from "./pages/CentralJava";
import WestJava from "./pages/WestJava";
import Services from "./pages/Services";
import TourPackages from "./pages/services/TourPackages";
import CarBusRental from "./pages/services/CarBusRental";
import MiceServices from "./pages/services/MiceServices";
import TravelDocuments from "./pages/services/TravelDocuments";
import TourismVillage from "./pages/services/TourismVillage";
import TourGuides from "./pages/services/TourGuides";
import Trips from "./pages/Trips";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/east-java" element={<EastJava />} />
          <Route path="/destinations/central-java" element={<CentralJava />} />
          <Route path="/destinations/west-java" element={<WestJava />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/tour-packages" element={<TourPackages />} />
          <Route path="/services/car-bus-rental" element={<CarBusRental />} />
          <Route path="/services/mice-services" element={<MiceServices />} />
          <Route path="/services/travel-documents" element={<TravelDocuments />} />
          <Route path="/services/tourism-village" element={<TourismVillage />} />
          <Route path="/services/tour-guides" element={<TourGuides />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
