'use client';

import React, { useEffect, useState } from 'react';

// Define your tags array with icons and labels
const tags = [
  { label: 'garmin vs apple watch', icon: '⌚' },
  { label: 'affordable cookware', icon: '🍳' },
  { label: 'cameras for beginning photographers', icon: '📷' },
  { label: 'how to tell if an image is AI generated', icon: '🤖' },
  { label: 'wooden data centers benefits', icon: '🪵' },
  { label: 'best hip-hop tracks of all time', icon: '🎤' },
  { label: 'tips for tinder bios', icon: '💬' },
  { label: 'best mechanical keyboards', icon: '⌨️' },
  { label: 'books like 1984', icon: '📖' },
  { label: 'whitening strip recommendations', icon: '🦷' },
  { label: 'meatloaf recipe', icon: '👩‍🍳' },
  { label: 'best underrated pop albums', icon: '🎤' },
  { label: 'best gaming news subreddits', icon: '🕹️' },
  { label: 'most effective alarm clocks', icon: '⏰' },
  { label: 'best netflix thrillers', icon: '🎥' },
  { label: 'why do some meteor showers happen annually', icon: '☄️' },
  { label: 'banana bread recipes', icon: '🍞' },
  { label: 'VR headset recommendations', icon: '🕶️' },
  { label: 'cheapest streaming service', icon: '📺' },
  { label: 'go-to karaoke songs', icon: '🎤' },
  { label: 'best beauty subreddits', icon: '💄' },
  { label: 'best finance subreddits', icon: '💸' },
  { label: 'dungeon master tips', icon: '🧙‍♂️' },
  { label: 'helpful finance podcasts', icon: '💸' },
  { label: 'saddest one piece moments', icon: '😢' },
  { label: 'good cartoons for younger kids', icon: '👶' },
  { label: 'useful notetaking apps', icon: '📝' },
  { label: 'best xbox games 2024', icon: '🎮' },
  { label: 'recommendations', icon: '' },
  { label: '2012 nissan altima rattling when cold', icon: '🚗' },
  { label: 'best sites for gaming news', icon: '📰' },
  { label: 'white lotus plot theories', icon: '🌿' },
  { label: 'best salary part-time jobs', icon: '💰' },
  { label: 'hypoallergenic cat breeds', icon: '🐱' },
  { label: 'best site to compare flight prices', icon: '✈️' },
  { label: 'le cookware', icon: '' },
  { label: 'tips for new parents', icon: '🍼' },
  { label: 'best selling sunset drama', icon: '🌇' },
  { label: 'marathon training tips for beginners', icon: '🏃' },
  { label: 'best ga', icon: '' },
];

// Split tags into 4 rows
const splitIntoRows = (arr: typeof tags, rows: number) => {
  const perRow = Math.ceil(arr.length / rows);
  return Array.from({ length: rows }, (_, i) =>
    arr.slice(i * perRow, (i + 1) * perRow)
  );
};

const tagRows = splitIntoRows(tags, 4);

const RedditAnswersPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation after component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-10 w-full max-w-4xl text-center">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-5 font-sans">
          reddit answers
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Got a question? Ask it and get answers, perspectives, and
          recommendations from all of Reddit
        </p>

        {/* Tags Section with Continuous Right-to-Left Animation */}
        <div className="space-y-2 mb-10 overflow-hidden">
          {tagRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex animate-marquee whitespace-nowrap"
              style={{ animationDelay: `${rowIndex * 0.5}s` }}
            >
              {/* Duplicate tags for seamless looping */}
              {[...row, ...row].map((tag, index) => (
                <button
                  key={`${rowIndex}-${index}`}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200 shadow-sm border border-gray-200 mx-1"
                >
                  {tag.icon && <span className="text-sm">{tag.icon}</span>}
                  <span>{tag.label}</span>
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Learn More Link Section with Animation */}
        <div className="max-w-2xl mx-auto flex justify-start">
          <a
            href="#" // Replace with actual link
            className={`
              text-blue-600 hover:underline font-semibold text-sm flex items-center
              transform transition-transform duration-700 ease-out
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}
          >
            Learn how Reddit Answers works
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>

      {/* Inline CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default RedditAnswersPage;