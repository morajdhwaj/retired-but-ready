import Image from "next/image";
import Navbar from "./components/Navbar";
import Connections from "./components/homeComponents/Connections";
import VideoComponent from "./components/homeComponents/VideoComponent";
import IntroComponent from "./components/homeComponents/IntroComponent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Connections />
      <VideoComponent />
      <IntroComponent />
    </div>
  );
}
