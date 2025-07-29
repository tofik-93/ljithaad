// app/popular/page.tsx
'use client'; // This component uses client-side interactivity

import { ChevronDown, ExternalLink } from "lucide-react"

interface NewsCard {
  title: string
  subtitle: string
  subreddit: string
  image: string
  subredditIcon: string
}

interface Post {
  id: string
  subreddit: string
  username: string
  timeAgo: string
  content: string
  link?: string
  image?: string
  subredditIcon: string
}

// Hardcoded Data (remain the same)
const newsCards: NewsCard[] = [
  {
    title: "US and EU strike trade deal",
    subtitle: "US and EU strike trade deal",
    subreddit: "r/europe",
    image: "/image_f2aa00.jpg", // Changed to use your uploaded image
    subredditIcon: "🇪🇺",
  },
  {
    title: "Wildfires in Turkey, Greece",
    subtitle: "'Apocalyptic' Turkey wildfires spread as...",
    subreddit: "r/europe",
    image: "/placeholder.svg?height=200&width=400",
    subredditIcon: "🇪🇺",
  },
  {
    title: "Bangkok market shooting",
    subtitle: "At least 6 killed in Bangkok market after...",
    subreddit: "r/worldnews",
    image: "/placeholder.svg?height=200&width=400",
    subredditIcon: "🌍",
  },
  {
    title: "Marcus Morris arrest",
    subtitle: "Former Suns Player Marcus...",
    subreddit: "r/suns",
    image: "/placeholder.svg?height=200&width=400",
    subredditIcon: "🏀",
  },
]

const posts: Post[] = [
  {
    id: "1",
    subreddit: "r/todayilearned",
    username: "r/todayilearned",
    timeAgo: "3 hr. ago",
    content:
      "TIL Ed Toutant lost at the $16K question on 'Who Wants to Be a Millionaire' because it was a flawed question. Therefore, he was invited back on & given a second chance, with the jackpot set back at $1.86m as it had been on his first appearance. In his return, he sailed to the end & won that jackpot.",
    link: "https://www.grunge.com/155134/the-biggest-payouts-in-game-show-history/",
    image: "/placeholder.svg?height=100&width=100",
    subredditIcon: "📚",
  },
  {
    id: "2",
    subreddit: "r/tragedeigh",
    username: "r/tragedeigh",
    timeAgo: "4 hr. ago",
    content: "So, what will be your kid's name?",
    image: "/placeholder.svg?height=200&width=300",
    subredditIcon: "👶",
  },
]

const sidebarPost = {
  subreddit: "r/cyberpunk",
  username: "r/cyberpunk...",
  timeAgo: "2 days ago",
  content: "Which arm cyberware would you use in real life?",
  image: "/placeholder.svg?height=100&width=100",
}

// The main page component
export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* News Cards Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsCards.map((card, index) => (
              // Replaced Shadcn Card with a simple div
              <div key={index} className="relative overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${index === 0 ? '/image_f2aa00.jpg' : card.image})` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{card.subtitle}</p>
                    <div className="flex items-center text-xs">
                      <span className="mr-1">{card.subredditIcon}</span>
                      <span className="font-medium">{card.subreddit}</span>
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
          {/* Replaced Shadcn Button with a simple button */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700">
            Best <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700">
            Everywhere <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-4">
            {posts.map((post) => (
              // Replaced Shadcn Card with a simple div
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                {/* Replaced Shadcn CardContent with a div */}
                <div>
                  <div className="flex items-start gap-4">
                    {/* Replaced Shadcn Avatar with a simple div */}
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                      {post.subredditIcon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm">{post.username}</span>
                        <span className="text-gray-500 text-sm">• {post.timeAgo}</span>
                        {/* Replaced Shadcn Button with a simple button */}
                        <button className="ml-auto px-3 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition-colors">
                          Join
                        </button>
                      </div>
                      <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
                      {post.link && (
                        <a
                          href={post.link}
                          className="text-blue-600 hover:underline text-sm flex items-center gap-1"
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
                          src={post.image || "/placeholder.svg"}
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
            {/* Replaced Shadcn Card with a simple div */}
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Replaced Shadcn CardContent with a div */}
              <div>
                <div className="flex items-start gap-3">
                  {/* Replaced Shadcn Avatar with a simple div */}
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
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
                      src={sidebarPost.image || "/placeholder.svg"}
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
  )
}