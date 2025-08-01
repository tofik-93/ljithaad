import Image from "next/image";
import TopBar from "./components/TopBar";
import Feed from "./components/Feed";
import CommunityList from "./components/CommunityList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed TopBar */}
      <TopBar />

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-2 sm:px-4 py-4">
        {/* Main Feed */}
        <div className="flex-1 lg:mr-4">
          <Feed />
        </div>

        {/* Community List - Right on desktop, below on mobile */}
        <div className="lg:w-80 mt-4 lg:mt-0">
          <CommunityList />
        </div>
      </div>
    </div>
  );
}