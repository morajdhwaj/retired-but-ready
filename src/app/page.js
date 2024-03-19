"use client";

import Navbar from "./components/Navbar";
import Connections from "./components/homeComponents/Connections";
import VideoComponent from "./components/homeComponents/VideoComponent";
import IntroComponent from "./components/homeComponents/IntroComponent";
import ContactComponent from "./components/homeComponents/ContactComponent";
import Footer from "./components/Footer";
import ExpertsComponents from "./components/homeComponents/ExpertsComponents";
import CheckBox from "./components/homeComponents/CheckBox";
import SuccessStories from "./components/homeComponents/SuccessStories";
import { UserIdContext } from "@/context/UserIdContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { userIdFromContext } = useContext(UserIdContext);
  const router = useRouter();

  useEffect(() => {
    if (userIdFromContext) {
      router.push("/all-feeds-page");
    }
  }, [userIdFromContext]); // Include userIdFromContext in the dependency array

  return (
    <div className="bg-[#e8e9e8]">
      <Navbar />
      <Connections />
      <VideoComponent />
      <IntroComponent />
      <ContactComponent />
      <ExpertsComponents />
      <CheckBox />
      <SuccessStories />
      <Footer />
    </div>
  );
}
