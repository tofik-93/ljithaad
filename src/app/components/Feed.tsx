import PostCard from "./PostCard";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Wildlife photographer Sha Lu captures the perfect moment a little critter prey looks directly at the camera while being captured by a predator.",
    subreddit: "r/BeAmazed",
    description: "Wildlife photographer Sha Lu captures the perfect moment a little critter prey looks directly at the camera while being captured by a predator.",
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Trump vein condition diagnosis...",
    subreddit: "r/news",
    description: "Trump diagnosed with chronic venous insufficiency.",
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "House passes NPR, PBS cuts",
    subreddit: "r/technology",
    description: "Trump's $1.1 Billion Cuts to NPR, PBS Passed.",
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    title: "Famed skydiver dead at 56",
    subreddit: "r/news",
    description: "Felix Baumgartner, Who Jumped From Space, Dies at 56.",
  },
];

const Feed = () => (
  <main className="feed-grid">
    {posts.map((post, idx) => (
      <PostCard key={idx} {...post} />
    ))}
  </main>
);

export default Feed; 