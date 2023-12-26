import Image from "next/image";
import Navbar from "./components/Navbar";
import Connections from "./components/homeComponents/Connections";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Connections />
    </div>
  );
}
