'use client'; // This component uses client-side interactivity

import { ChevronDown, ExternalLink } from 'lucide-react';

interface NewsCard {
  title: string;
  subtitle: string;
  category: string; // Changed from subreddit to category
  image: string;
  categoryIcon: string; // Changed from subredditIcon
}

interface Post {
  id: string;
  category: string; // Changed from subreddit
  username: string;
  timeAgo: string;
  content: string;
  link?: string;
  image?: string;
  categoryIcon: string; // Changed from subredditIcon
}

// Hardcoded Data (updated for Islamic content)
const newsCards: NewsCard[] = [
  {
    title: 'New Fatwa Issued',
    subtitle: 'Scholars release guidance on modern financial transactions',
    category: 'Islamic News',
    image: '/image_f2aa00.jpg', // Changed to use your uploaded image
    categoryIcon: '📰',
  },
  {
    title: 'Quran Recitation Event',
    subtitle: 'Global online event to recite Surah Al-Baqarah',
    category: 'Quran',
    image: '/placeholder.svg?height=200&width=400',
    categoryIcon: '📖',
  },
  {
    title: 'Hadis of the Day',
    subtitle: 'Reflection on the Prophet’s teachings on charity',
    category: 'Hadis',
    image: '/placeholder.svg?height=200&width=400',
    categoryIcon: '✨',
  },
  {
    title: 'Islamic Finance Update',
    subtitle: 'New developments in Sharia-compliant banking',
    category: 'Islamic News',
    image: '/placeholder.svg?height=200&width=400',
    categoryIcon: '📰',
  },
];

const posts: Post[] = [
  {
    id: '1',
    category: 'Quran',
    username: 'u/QuranLover',
    timeAgo: '3 hr. ago',
    content:
      'Learned today that Surah Al-Fatiha is called the "Mother of the Quran" due to its comprehensive meaning. Reflect on its verses for daily guidance.',
    link: 'https://www.islamicinsights.org/quran-surah-al-fatiha/',
    image: '/placeholder.svg?height=100&width=100',
    categoryIcon: '📖',
  },
  {
    id: '2',
    category: 'Hadis',
    username: 'u/HadisSeeker',
    timeAgo: '4 hr. ago',
    content: 'Which Hadis inspires your daily acts of kindness?',
    image: '/placeholder.svg?height=200&width=300',
    categoryIcon: '✨',
  },
];

const sidebarPost = {
  category: 'Islamic News',
  username: 'u/IslamicScholar',
  timeAgo: '2 days ago',
  content: 'Which Islamic principle guides your financial decisions?',
  image: '/placeholder.svg?height=100&width=100',
};

// The main page component
export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* News Cards Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsCards.map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${index === 0 ? '/image_f2aa00.jpg' : card.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{card.subtitle}</p>
                    <div className="flex items-center text-xs">
                      <span className="mr-1">{card.categoryIcon}</span>
                      <span className="font-medium">{card.category}</span>
                      <span className="ml-2 opacity-75">and more</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter Bar */}
        <div className="flex items-center gap-4 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700">
            Best <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700">
            All Categories <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
                      {post.categoryIcon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm">{post.username}</span>
                        <span className="text-gray-500 text-sm">• {post.timeAgo}</span>
                        <button className="ml-auto px-3 py-1 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition-colors">
                          Join
                        </button>
                      </div>
                      <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
                      {post.link && (
                        <a
                          href={post.link}
                          className="text-green-600 hover:underline text-sm flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.link}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    {post.image && (
                      <div className="flex-shrink-0">
                        <img
                          src={post.image || '/placeholder.svg'}
                          alt="Post image"
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
                    🤖
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm">{sidebarPost.username}</span>
                      <span className="text-gray-500 text-sm">• {sidebarPost.timeAgo}</span>
                    </div>
                    <p className="text-gray-900 text-sm mb-3">{sidebarPost.content}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={sidebarPost.image || '/placeholder.svg'}
                      alt="Sidebar post"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}