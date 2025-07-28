'use client';

import PostCard from "./PostCard";

interface PostData {
    id: string;
    image: string;
    title: string;
    subreddit: string;
    description: string;
    author: string;
    timestamp: string;
    upvotes: number;
    downvotes: number;
    comments: number;
    subredditIcon?: string; // Make this optional in the interface as some might not have one
}

const posts: PostData[] = [
    {
        id: '1',
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        title: "Wildlife photographer Sha Lu captures the perfect moment a little critter prey looks directly at the camera while being captured by a predator.",
        subreddit: "BeAmazed",
        description: "Wildlife photographer Sha Lu captures the perfect moment a little critter prey looks directly at the camera while being captured by a predator.",
        author: "ShaLuPhotos",
        timestamp: "2 hours ago",
        upvotes: 1234,
        downvotes: 50,
        comments: 215,
        // Added a specific icon for this subreddit
        // subredditIcon: "https://dribbble.com/shots/26281261-Golden-Hour-Blend", // Replace with a real URL or local path
    },
    {
        id: '2',
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        title: "Trump vein condition diagnosis...",
        subreddit: "news",
        description: "Trump diagnosed with chronic venous insufficiency.",
        author: "PoliticalPundit",
        timestamp: "5 hours ago",
        upvotes: 876,
        downvotes: 300,
        comments: 450,
        // Using a different icon for 'news'
        subredditIcon: "https://dribbble.com/shots/26281261-Golden-Hour-Blend", // Replace with a real URL or local path
    },
    {
        id: '3',
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        title: "House passes NPR, PBS cuts",
        subreddit: "technology",
        description: "Trump's $1.1 Billion Cuts to NPR, PBS Passed.",
        author: "TechNewsDaily",
        timestamp: "1 day ago",
        upvotes: 567,
        downvotes: 120,
        comments: 180,
        // Another icon
        // subredditIcon: "https://dribbble.com/shots/26281261-Golden-Hour-Blend", // Replace with a real URL or local path
    },
    {
        id: '4',
        image: "",
        title: "Famed skydiver dead at 56",
        subreddit: "news", // This post also belongs to 'news'
        description: "Felix Baumgartner, Who Jumped From Space, Dies at 56.",
        author: "BreakingReporter",
        timestamp: "3 days ago",
        upvotes: 2100,
        downvotes: 80,
        comments: 320,
        // Can reuse the 'news' icon or leave undefined to use default
        // subredditIcon: "https://dribbble.com/shots/26281261-Golden-Hour-Blend",
    },
];

const Feed = () => (
    <main
        className="flex flex-col items-center w-full min-h-screen overflow-y-auto bg-gray-100 py-6 px-4 sm:px-6 lg:px-8"
    >

        <div className="w-full max-w-2xl space-y-6">
            {posts.map((post) => (
                <div key={post.id} className="w-full">
                    <PostCard
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        subreddit={post.subreddit}
                        description={post.description}
                        author={post.author}
                        timestamp={post.timestamp}
                        upvotes={post.upvotes}
                        downvotes={post.downvotes}
                        comments={post.comments}
                        // subredditIcon={post.subredditIcon} // Pass the specific icon here
                    />
                </div>
            ))}
        </div>
    </main>
);

export default Feed;