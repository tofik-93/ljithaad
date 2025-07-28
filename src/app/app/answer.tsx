// src/app/RedditAnswersPage.tsx (or wherever you prefer to put pages)
'use client'; // Required for client-side interactivity if you add state later

import React from 'react';

const tags = [
  { label: 'saddest one piece moments', icon: '😢' },
  { label: 'good cartoons for younger kids', icon: '👶' },
  { label: 'useful notetaking apps', icon: '📝' },
  { label: 'best xbox games 2024', icon: '🎮' },
  { label: 'recommendations', icon: '' }, // No explicit icon in the image for this one
  { label: '2012 nissan altima rattling when cold', icon: '🚗' },
  { label: 'best sites for gaming news', icon: '📰' },
  { label: 'white lotus plot theories', icon: '🌿' },
  { label: 'best salary part-time jobs', icon: '💰' },
  { label: 'best hip-hop tracks of all time', icon: '🎵' },
  { label: 'hypoallergenic cat breeds', icon: '🐱' },
  { label: 'best site to compare flight prices', icon: '✈️' },
  { label: 'le cookware', icon: '' }, // No explicit icon
  { label: 'tips for new parents', icon: '🍼' },
  { label: 'best selling sunset drama', icon: '🌇' },
  { label: 'marathon training tips for beginners', icon: '🏃' },
  { label: 'best ga', icon: '' }, // Incomplete tag from image
  // Add more tags as needed based on your image
];

const RedditAnswersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12 w-full max-w-4xl text-center">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-6 font-sans">
          reddit answers
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Got a question? Ask it and get answers, perspectives, and
          recommendations from all of Reddit
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 shadow-sm border border-gray-200"
            >
              {tag.icon && <span className="text-base">{tag.icon}</span>}
              <span>{tag.label}</span>
            </button>
          ))}
        </div>

        {/* Learn More Link */}
        <a
          href="#" // Replace with actual link
          className="text-blue-600 hover:underline font-semibold text-base"
        >
          Learn how Reddit Answers works 
        </a>
      </div>
    </div>
  );
};

export default RedditAnswersPage;