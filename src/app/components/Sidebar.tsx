'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Correct import for useRouter in App Router
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';


const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [internetCultureOpen, setInternetCultureOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [qasOpen, setQasOpen] = useState(false);
  const [popCultureOpen, setPopCultureOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const router = useRouter();

  const navItems = [
    { label: "Home", icon: HomeIcon, path: '/' }, // Add paths for easier navigation
    { label: "Popular", icon: SearchIcon, path: '/popular' },
    { label: "Answers", icon: QuestionAnswerIcon, path: '/answers' }, // <--- Added path
    { label: "Explore", icon: ExploreIcon, path: '/explore' },
    {
      label: "All",
      icon: ({ active }: { active: boolean }) => ( // Explicitly type 'active' for clarity
        <img
          src="/allicone.png" // Ensure this image exists in your /public folder
          alt="All"
          className={`w-[18px] h-[18px] inline-block align-middle transition-all duration-200
            ${active ? 'filter brightness-[0.2] scale-110' : 'filter invert-[54%] brightness-[100%]'}
          `}
        />
      ),
      path: '/all' // Example path
    },
  ];

  return (
    <aside className={`
      bg-white py-4
      transition-all duration-300 ease-in-out
      ${isCollapsed ? 'w-16' : 'w-full lg:w-80'}
      ${isCollapsed ? 'hidden lg:block' : 'block'}
    `}>
      <nav>
        <ul className="list-none p-0 m-0">
          <li
            className={`
              flex items-center px-2 py-3 cursor-pointer mb-4
              ${isCollapsed ? 'justify-center' : 'justify-end pr-4'}
              hover:bg-gray-100 rounded-lg mx-2
            `}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <MenuIcon fontSize="small" className="text-gray-600" />
            ) : (
              <MenuOpenIcon fontSize="small" className="text-gray-600" />
            )}
          </li>

          {/* Main Navigation Items */}
          {navItems.map((item) => {
            const isActive = activeNav === item.label; // You might want to compare with router.pathname instead
            const IconComponent = item.icon;

            return (
              <li
                key={item.label}
                onClick={() => {
                  setActiveNav(item.label); // Update active state visually
                  if (item.path) { // If a path is defined, navigate
                    router.push(item.path);
                  }
                }}
                className={`
                  flex items-center py-3 font-medium text-sm
                  rounded-lg cursor-pointer transition-all duration-200
                  mx-2 my-1
                  ${isCollapsed ? 'justify-center px-0' : 'px-6'}
                  ${isActive // Consider `router.pathname === item.path` for active state
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-transparent text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <span className={`text-xl mr-4 ${isCollapsed ? 'mr-0' : ''} ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                  {typeof IconComponent === "function"
                    ? IconComponent({ active: isActive })
                    : <IconComponent className="text-current" fontSize="small" />
                  }
                </span>
                {!isCollapsed && (
                  <>
                    {item.label}
                    {item.label === 'Answers' && (
                      <span className={`text-[10px] ml-1 font-bold ${isActive ? 'text-gray-500' : 'text-orange-500'}`}>BETA</span>
                    )}
                  </>
                )}
              </li>
            );
          })}

          {/* Divider */}
          <hr className="border-t border-gray-200 my-4 mx-4" />

          {/* CUSTOMER FEEDBACK Section */}
          {!isCollapsed && (
            <li className="px-6 text-gray-500 font-normal text-xs mb-1 uppercase">
              Customer Feedback
            </li>
          )}
          <li className={`
            flex items-center py-2 text-gray-600 text-sm cursor-pointer hover:bg-gray-100 rounded-lg mx-2
            ${isCollapsed ? 'justify-center px-0' : 'px-6'}
          `}>
            <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-4'} text-gray-600`}>
              <AddIcon fontSize="small" />
            </span>
            {!isCollapsed && 'Create a custom feed'}
          </li>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-4 mx-4" />

          {/* Topics Section */}
          {!isCollapsed && (
            <li className="px-6 text-gray-500 font-bold text-xs mb-1 flex items-center justify-between uppercase">
              Topics
            </li>
          )}
          <ul className="list-none pl-6 mb-2">
            {/* Internet Culture (Viral) */}
            <li className={`
              flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
              ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
            `} onClick={() => setInternetCultureOpen((v) => !v)}>
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>😃</span>
              {!isCollapsed && 'Internet Culture (Viral)'}
              {!isCollapsed && (
                <span className="ml-auto text-sm text-gray-400">
                  {internetCultureOpen ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
                </span>
              )}
            </li>
            {internetCultureOpen && !isCollapsed && (
              <ul className="list-none pl-8 mt-1 mb-2">
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Amazing</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Animal & Pets</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Cringe & Facepalm</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Funny</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Interesting</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Memes</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Oddly Satisfying</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Reddit Meta</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Wholesome & Heartwarming</li>
              </ul>
            )}

            {/* Games */}
            <li className={`
              flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
              ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
            `} onClick={() => setGamesOpen((v) => !v)}>
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>🎮</span>
              {!isCollapsed && 'Games'}
              {!isCollapsed && (
                <span className="ml-auto text-sm text-gray-400">
                  {gamesOpen ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
                </span>
              )}
            </li>
            {gamesOpen && !isCollapsed && (
              <ul className="list-none pl-8 mt-1 mb-2">
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Action</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Adventure</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">RPG</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Shooter</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Sports</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Strategy</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Simulation</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Puzzle</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Racing</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Indie</li>
              </ul>
            )}

            {/* Q&As */}
            <li className={`
              flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
              ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
            `} onClick={() => setQasOpen((v) => !v)}>
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>❓</span>
              {!isCollapsed && 'Q&As'}
              {!isCollapsed && (
                <span className="ml-auto text-sm text-gray-400">
                  {qasOpen ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
                </span>
              )}
            </li>
            {qasOpen && !isCollapsed && (
              <ul className="list-none pl-8 mt-1 mb-2">
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">AskReddit</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">NoStupidQuestions</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">ExplainLikeImFive</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">TooAfraidToAsk</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">OutOfTheLoop</li>
              </ul>
            )}

            {/* Technology */}
            <li className={`
              flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
              ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
            `} onClick={() => setTechnologyOpen((v) => !v)}>
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>💻</span>
              {!isCollapsed && 'Technology'}
              {!isCollapsed && (
                <span className="ml-auto text-sm text-gray-400">
                  {technologyOpen ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
                </span>
              )}
            </li>
            {technologyOpen && !isCollapsed && (
              <ul className="list-none pl-8 mt-1 mb-2">
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Gadgets</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Programming</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">AI & Machine Learning</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Tech News</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Startups</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Science</li>
              </ul>
            )}

            {/* Pop Culture */}
            <li className={`
              flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
              ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
            `} onClick={() => setPopCultureOpen((v) => !v)}>
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>🎬</span>
              {!isCollapsed && 'Pop Culture'}
              {!isCollapsed && (
                <span className="ml-auto text-sm text-gray-400">
                  {popCultureOpen ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
                </span>
              )}
            </li>
            {popCultureOpen && !isCollapsed && (
              <ul className="list-none pl-8 mt-1 mb-2">
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Movies</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">TV Shows</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Music</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Celebrities</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Books</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Comics</li>
                <li className="py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer">Anime & Manga</li>
              </ul>
            )}
            {/* Movies & TV - Not collapsible, always visible icon */}
            <li className={`
              flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 rounded-lg pr-4 cursor-pointer
              ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
            `}>
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>📺</span>
              {!isCollapsed && 'Movies & TV'}
            </li>
            {!isCollapsed && (
              <li className="text-blue-600 mt-1 cursor-pointer py-1 pl-6 hover:underline text-sm">See more</li>
            )}
          </ul>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-4 mx-4" />

          {/* Resources Section */}
          {!isCollapsed && (
            <li className="px-6 text-gray-500 font-bold text-xs mb-1 flex items-center justify-between uppercase">
              Resources
            </li>
          )}
          <ul className="list-none pl-6 mb-2">
            <li className={`
              flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 rounded-lg pr-4 cursor-pointer
              ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
            `}>
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>ℹ️</span>
              {!isCollapsed && 'About Reddit'}
            </li>
          </ul>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;