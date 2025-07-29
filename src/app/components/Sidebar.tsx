'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  const [activeNav, setActiveNav] = useState('Home');
  const [internetCultureOpen, setInternetCultureOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [qasOpen, setQasOpen] = useState(false);
  const [popCultureOpen, setPopCultureOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  const navItems = [
    { label: 'Home', icon: HomeIcon, path: '/' },
    { label: 'Popular', icon: SearchIcon, path: '/popular' },
    { label: 'Answers', icon: QuestionAnswerIcon, path: '/answers' },
    { label: 'Explore', icon: ExploreIcon, path: '/explore' },
    {
      label: 'All',
      icon: ({ active }: { active: boolean }) => (
        <img
          src='/allicone.png'
          alt='All'
          className={`w-[18px] h-[18px] inline-block align-middle transition-all duration-200
            ${active ? 'filter brightness-[0.2] scale-110' : 'filter invert-[54%] brightness-[100%]'}
          `}
        />
      ),
      path: '/all',
    },
  ];

  // Sub-menu items with paths for navigation
  const subMenus = {
    internetCulture: [
      { label: 'Amazing', path: '/internet-culture/amazing' },
      { label: 'Animal & Pets', path: '/internet-culture/animals' },
      { label: 'Cringe & Facepalm', path: '/internet-culture/cringe' },
      { label: 'Funny', path: '/internet-culture/funny' },
      { label: 'Interesting', path: '/internet-culture/interesting' },
      { label: 'Memes', path: '/internet-culture/memes' },
      { label: 'Oddly Satisfying', path: '/internet-culture/satisfying' },
      { label: 'Reddit Meta', path: '/internet-culture/meta' },
      { label: 'Wholesome & Heartwarming', path: '/internet-culture/wholesome' },
    ],
    games: [
      { label: 'Action', path: '/games/action' },
      { label: 'Adventure', path: '/games/adventure' },
      { label: 'RPG', path: '/games/rpg' },
      { label: 'Shooter', path: '/games/shooter' },
      { label: 'Sports', path: '/games/sports' },
      { label: 'Strategy', path: '/games/strategy' },
      { label: 'Simulation', path: '/games/simulation' },
      { label: 'Puzzle', path: '/games/puzzle' },
      { label: 'Racing', path: '/games/racing' },
      { label: 'Indie', path: '/games/indie' },
    ],
    qas: [
      { label: 'AskReddit', path: '/qas/askreddit' },
      { label: 'NoStupidQuestions', path: '/qas/no-stupid-questions' },
      { label: 'ExplainLikeImFive', path: '/qas/explain-like-im-five' },
      { label: 'TooAfraidToAsk', path: '/qas/too-afraid-to-ask' },
      { label: 'OutOfTheLoop', path: '/qas/out-of-the-loop' },
    ],
    technology: [
      { label: 'Gadgets', path: '/technology/gadgets' },
      { label: 'Programming', path: '/technology/programming' },
      { label: 'AI & Machine Learning', path: '/technology/ai' },
      { label: 'Tech News', path: '/technology/news' },
      { label: 'Startups', path: '/technology/startups' },
      { label: 'Science', path: '/technology/science' },
    ],
    popCulture: [
      { label: 'Movies', path: '/pop-culture/movies' },
      { label: 'TV Shows', path: '/pop-culture/tv-shows' },
      { label: 'Music', path: '/pop-culture/music' },
      { label: 'Celebrities', path: '/pop-culture/celebrities' },
      { label: 'Books', path: '/pop-culture/books' },
      { label: 'Comics', path: '/pop-culture/comics' },
      { label: 'Anime & Manga', path: '/pop-culture/anime' },
    ],
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className='lg:hidden fixed top-0 left-0 z-50 p-2 bg-white text-gray-600'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          bg-white
          fixed top-0 left-0 h-screen
          transition-all duration-300 ease-in-out
          z-40
          ${isCollapsed ? 'w-16' : 'w-96'}
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          lg:sticky lg:top-0
          overflow-y-auto
          scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
        `}
      >
        <nav className='pt-12 lg:pt-0'>
          <ul className='list-none p-0 m-0'>
            <li
              className={`
                flex items-center px-2 py-3 cursor-pointer mb-2
                ${isCollapsed ? 'justify-center' : 'justify-end pr-4'}
                hover:bg-gray-100 rounded-lg mx-2
              `}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <MenuIcon fontSize='small' className='text-gray-600' />
              ) : (
                <MenuOpenIcon fontSize='small' className='text-gray-600' />
              )}
            </li>

            {/* Main Navigation Items */}
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              const IconComponent = item.icon;

              return (
                <li
                  key={item.label}
                  onClick={() => {
                    setActiveNav(item.label);
                    if (item.path) {
                      router.push(item.path);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    flex items-center py-3 font-medium text-sm
                    rounded-lg cursor-pointer transition-all duration-200
                    mx-2 my-1
                    ${isCollapsed ? 'justify-center px-0' : 'px-6'}
                    ${isActive ? 'bg-gray-200 text-gray-900' : 'bg-transparent text-gray-600 hover:bg-gray-100'}
                  `}
                >
                  <span
                    className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-4'} ${isActive ? 'text-gray-900' : 'text-gray-600'}`}
                  >
                    {typeof IconComponent === 'function' ? (
                      IconComponent({ active: isActive })
                    ) : (
                      <IconComponent className='text-current' fontSize='small' />
                    )}
                  </span>
                  {!isCollapsed && (
                    <>
                      {item.label}
                      {item.label === 'Answers' && (
                        <span
                          className={`text-[10px] ml-1 font-bold ${isActive ? 'text-gray-500' : 'text-orange-500'}`}
                        >
                          BETA
                        </span>
                      )}
                    </>
                  )}
                </li>
              );
            })}

            {/* Divider */}
            <hr className='border-t border-gray-200 my-4 mx-4' />

            {/* CUSTOMER FEEDBACK Section */}
            {!isCollapsed && (
              <li className='px-6 text-gray-500 font-normal text-xs mb-1 uppercase'>Customer Feedback</li>
            )}
            <li
              className={`
                flex items-center py-2 text-gray-600 text-sm cursor-pointer hover:bg-gray-100 rounded-lg mx-2
                ${isCollapsed ? 'justify-center px-0' : 'px-6'}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-4'} text-gray-600`}>
                <AddIcon fontSize='small' />
              </span>
              {!isCollapsed && 'Create a custom feed'}
            </li>

            {/* Divider */}
            <hr className='border-t border-gray-200 my-4 mx-4' />

            {/* Topics Section */}
            {!isCollapsed && (
              <li className='px-6 text-gray-500 font-bold text-xs mb-1 flex items-center justify-between uppercase'>
                Topics
              </li>
            )}
            <ul className='list-none pl-6 mb-2'>
              {/* Internet Culture (Viral) */}
              <li
                className={`
                  flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
                  ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
                `}
                onClick={() => setInternetCultureOpen((v) => !v)}
              >
                <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>😃</span>
                {!isCollapsed && 'Internet Culture (Viral)'}
                {!isCollapsed && (
                  <span className='ml-auto text-sm text-gray-400'>
                    {internetCultureOpen ? (
                      <KeyboardArrowDownIcon fontSize='small' />
                    ) : (
                      <KeyboardArrowRightIcon fontSize='small' />
                    )}
                  </span>
                )}
              </li>
              {internetCultureOpen && !isCollapsed && (
                <ul className='list-none pl-8 mt-1 mb-2'>
                  {subMenus.internetCulture.map((subItem) => (
                    <li
                      key={subItem.label}
                      className='py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer'
                      onClick={() => {
                        setActiveNav(subItem.label);
                        router.push(subItem.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}

              {/* Games */}
              <li
                className={`
                  flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
                  ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
                `}
                onClick={() => setGamesOpen((v) => !v)}
              >
                <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>🎮</span>
                {!isCollapsed && 'Games'}
                {!isCollapsed && (
                  <span className='ml-auto text-sm text-gray-400'>
                    {gamesOpen ? <KeyboardArrowDownIcon fontSize='small' /> : <KeyboardArrowRightIcon fontSize='small' />}
                  </span>
                )}
              </li>
              {gamesOpen && !isCollapsed && (
                <ul className='list-none pl-8 mt-1 mb-2'>
                  {subMenus.games.map((subItem) => (
                    <li
                      key={subItem.label}
                      className='py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer'
                      onClick={() => {
                        setActiveNav(subItem.label);
                        router.push(subItem.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}

              {/* Q&As */}
              <li
                className={`
                  flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
                  ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
                `}
                onClick={() => setQasOpen((v) => !v)}
              >
                <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>❓</span>
                {!isCollapsed && 'Q&As'}
                {!isCollapsed && (
                  <span className='ml-auto text-sm text-gray-400'>
                    {qasOpen ? <KeyboardArrowDownIcon fontSize='small' /> : <KeyboardArrowRightIcon fontSize='small' />}
                  </span>
                )}
              </li>
              {qasOpen && !isCollapsed && (
                <ul className='list-none pl-8 mt-1 mb-2'>
                  {subMenus.qas.map((subItem) => (
                    <li
                      key={subItem.label}
                      className='py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer'
                      onClick={() => {
                        setActiveNav(subItem.label);
                        router.push(subItem.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}

              {/* Technology */}
              <li
                className={`
                  flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
                  ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
                `}
                onClick={() => setTechnologyOpen((v) => !v)}
              >
                <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>💻</span>
                {!isCollapsed && 'Technology'}
                {!isCollapsed && (
                  <span className='ml-auto text-sm text-gray-400'>
                    {technologyOpen ? <KeyboardArrowDownIcon fontSize='small' /> : <KeyboardArrowRightIcon fontSize='small' />}
                  </span>
                )}
              </li>
              {technologyOpen && !isCollapsed && (
                <ul className='list-none pl-8 mt-1 mb-2'>
                  {subMenus.technology.map((subItem) => (
                    <li
                      key={subItem.label}
                      className='py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer'
                      onClick={() => {
                        setActiveNav(subItem.label);
                        router.push(subItem.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}

              {/* Pop Culture */}
              <li
                className={`
                  flex items-center py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 rounded-lg pr-4
                  ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
                `}
                onClick={() => setPopCultureOpen((v) => !v)}
              >
                <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>🎬</span>
                {!isCollapsed && 'Pop Culture'}
                {!isCollapsed && (
                  <span className='ml-auto text-sm text-gray-400'>
                    {popCultureOpen ? <KeyboardArrowDownIcon fontSize='small' /> : <KeyboardArrowRightIcon fontSize='small' />}
                  </span>
                )}
              </li>
              {popCultureOpen && !isCollapsed && (
                <ul className='list-none pl-8 mt-1 mb-2'>
                  {subMenus.popCulture.map((subItem) => (
                    <li
                      key={subItem.label}
                      className='py-1 text-gray-600 text-sm hover:bg-gray-100 rounded-lg pl-2 cursor-pointer'
                      onClick={() => {
                        setActiveNav(subItem.label);
                        router.push(subItem.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}

              {/* Movies & TV */}
              <li
                className={`
                  flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 rounded-lg pr-4 cursor-pointer
                  ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
                `}
                onClick={() => {
                  setActiveNav('Movies & TV');
                  router.push('/movies-tv');
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>📺</span>
                {!isCollapsed && 'Movies & TV'}
              </li>
              {!isCollapsed && (
                <li
                  className='text-blue-600 mt-1 cursor-pointer py-1 pl-6 hover:underline text-sm'
                  onClick={() => {
                    router.push('/topics');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  See more
                </li>
              )}
            </ul>

            {/* Divider */}
            <hr className='border-t border-gray-200 my-4 mx-4' />

            {/* Resources Section */}
            {!isCollapsed && (
              <li className='px-6 text-gray-500 font-bold text-xs mb-1 flex items-center justify-between uppercase'>
                Resources
              </li>
            )}
            <ul className='list-none pl-6 mb-2'>
              <li
                className={`
                  flex items-center py-2 text-gray-700 text-sm hover:bg-gray-100 rounded-lg pr-4 cursor-pointer
                  ${isCollapsed ? 'justify-center pl-0' : 'pl-0'}
                `}
                onClick={() => {
                  setActiveNav('About Reddit');
                  router.push('/about');
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className={`text-xl ${isCollapsed ? 'mr-0' : 'mr-3'}`}>ℹ️</span>
                {!isCollapsed && 'About Reddit'}
              </li>
            </ul>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30'
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;