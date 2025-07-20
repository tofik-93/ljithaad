import Image from "next/image";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Feed from "./components/Feed";
import CommunityList from "./components/CommunityList"; 

export default function Home() {
  return (
    <div className="reddit-layout">
      <TopBar />
      <div className="main-content">
        <Sidebar />
        <Feed />
        <CommunityList />
      </div>
    </div>
  );
}
