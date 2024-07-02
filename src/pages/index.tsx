import Image from "next/image";
import { Inter } from "next/font/google";
import {Projects} from "@/components/Projects";
import {Experience} from "@/components/Experience";
import {Nameplate} from "@/components/nameplate";
import {useState} from "react";
import {SlidingTabBar} from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const tabContents = [
    <Nameplate />,
    <Experience />,
    <Projects />,
    <div>Skills Content Here</div>
  ];

  return (
      <div className="App bg-black grid-background w-screen h-screen overflow-x-hidden">
        <div className={"flex items-center relative top-16"}>
          <SlidingTabBar activeTabIndex={tabIndex} setActiveTabIndex={setTabIndex} />
        </div>
        <div className={"flex text-white justify-center items-center relative top-28"}>
          {tabContents[tabIndex]}
        </div>
      </div>
  );
}

