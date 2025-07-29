// app/explore/page.tsx
'use client';

import React from 'react';

const ExplorePage = () => {
  // Mock data based on the image
  const categories = [
    { label: 'All', icon: '🌐' },
    { label: 'Internet Culture', icon: '😃' },
    { label: 'Games', icon: '🎮' },
    { label: 'Q&As & Stories', icon: '❓' },
    { label: 'Movies & TV', icon: '🎬' },
    { label: 'Technology', icon: '💻' },
    { label: 'Places & Travel', icon: '🌍' },
    { label: 'Pop Culture', icon: '🎉' },
    { label: 'Business & Finance', icon: '💰' },
  ];

  const recommendedCommunities = [
    { name: 'overlocking', members: '312k members', description: 'Push your chips a little harder. Get tips and advice on overlocking.', image: '/overlocking.jpg' },
    { name: 'techsupport', members: '3.2m members', description: 'Get help with tech problems and share your troubleshooting expertise.', image: '/techsupport.jpg' },
    { name: 'Edgerunners', members: '133k members', description: 'For the anime, CYBERPUNK: EDGERUNNERS', image: '/edgerunners.jpg' },
    { name: 'funny', members: '67m members', description: 'Get your daily fix of humor with posts that will have you laughing out loud.', image: '/funny.jpg' },
    { name: 'VALORANT', members: '2.6m members', description: 'Join the battle and master your skills in Riot\'s tactical shooter.', image: '/valorant.jpg' },
  ];

  const moreLikeTechnology = [
    { name: 'gadgets', members: '23m members', description: 'Stay up-to-date on the latest and greatest gadgets, gizmos, and gear.', image: '/gadgets.jpg' },
    { name: 'news', members: '31m members', description: 'Stay ahead of the news cycle and join the discussion on breaking news.', image: '/news.jpg' },
    { name: 'nottheonion', members: '26m members', description: 'You won\'t believe these are real headlines. Share bizarre news stories.', image: '/nottheonion.jpg' },
  ];

  const customFeeds = [
    { name: 'r/cyberpunk2077', image: '/cyberpunk.jpg' },
    { name: 'r/discordapp', image: '/discord.jpg' },
    { name: 'r/NoStupidQuestions', image: '/nostupid.jpg' },
    { name: 'r/pcmasterrace', image: '/pcmasterrace.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-14">
      {/* Top padding to account for fixed topbar (h-14) */}
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Explore Communities</h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.label}
              className="flex items-center px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-50"
            >
              <span className="mr-1">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Recommended for You */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Recommended for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedCommunities.map((community) => (
              <div key={community.name} className="bg-white p-4 rounded-lg shadow">
                <img src={community.image} alt={community.name} className="w-12 h-12 rounded-full mb-2" />
                <h3 className="font-semibold">{community.name}</h3>
                <p className="text-sm text-gray-500">{community.members}</p>
                <p className="text-sm text-gray-700">{community.description}</p>
                <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm">Join</button>
              </div>
            ))}
          </div>
          <button className="mt-2 text-blue-500 text-sm">Show more</button>
        </div>

        {/* More like Technology */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">More like technology</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreLikeTechnology.map((community) => (
              <div key={community.name} className="bg-white p-4 rounded-lg shadow">
                <img src={community.image} alt={community.name} className="w-12 h-12 rounded-full mb-2" />
                <h3 className="font-semibold">{community.name}</h3>
                <p className="text-sm text-gray-500">{community.members}</p>
                <p className="text-sm text-gray-700">{community.description}</p>
                <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm">Join</button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Feeds */}
        <div>
          <h2 className="text-lg font-semibold mb-2">More technology</h2>
          <div className="grid grid-cols-4 gap-2">
            {customFeeds.map((feed) => (
              <div key={feed.name} className="bg-white p-2 rounded-lg shadow flex items-center">
                <img src={feed.image} alt={feed.name} className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm">{feed.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;