import Image from "next/image";
import Navbar from "./components/Navbar";
import Connections from "./components/homeComponents/Connections";
import VideoComponent from "./components/homeComponents/VideoComponent";
import IntroComponent from "./components/homeComponents/IntroComponent";
import ContactComponent from "./components/homeComponents/ContactComponent";
import Footer from "./components/Footer";
import ExpertsComponents from "./components/homeComponents/ExpertsComponents";

export default function Home() {
  return (
    <div className="bg-[#EDEBF2]">
      <Navbar />
      <Connections />
      <VideoComponent />
      <IntroComponent />
      <ContactComponent />
      <ExpertsComponents />
      <Footer />
    </div>
  );
}
