type PostCardProps = {
  image: string;
  title: string;
  subreddit: string;
  description: string;
};

const PostCard = ({ image, title, subreddit, description }: PostCardProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#f6f7f8',
      borderRadius: 12,
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      height: 340,
      minWidth: 0,
    }}
  >
    <div style={{ width: '100%', height: 160, overflow: 'hidden', background: '#ddd' }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ color: '#0079d3', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{subreddit}</div>
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, lineHeight: 1.2 }}>{title}</div>
      <div style={{ color: '#444', fontSize: 14, flex: 1 }}>{description}</div>
    </div>
  </div>
);

export default PostCard; 