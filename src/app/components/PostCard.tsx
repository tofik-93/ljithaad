"use client";

import React, { useState } from 'react';

type PostCardProps = {
  image: string;
  title: string;
  subreddit: string;
  description: string;
  subredditIcon?: string;
  datePosted?: string;
};

const PostCard = ({
  image,
  title,
  subreddit,
  description,
  subredditIcon = "/reddit-logo.png",
  datePosted = "2 days ago",
}: PostCardProps) => {
  const [votes, setVotes] = useState(0);
  const [userVote, setUserVote] = useState(0); // 1 for up, -1 for down, 0 for none
  const [comments, setComments] = useState(0);
  const [commentInput, setCommentInput] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleUpvote = () => {
    if (userVote === 1) {
      setVotes(votes - 1);
      setUserVote(0);
    } else if (userVote === -1) {
      setVotes(votes + 2);
      setUserVote(1);
    } else {
      setVotes(votes + 1);
      setUserVote(1);
    }
  };

  const handleDownvote = () => {
    if (userVote === -1) {
      setVotes(votes + 1);
      setUserVote(0);
    } else if (userVote === 1) {
      setVotes(votes - 2);
      setUserVote(-1);
    } else {
      setVotes(votes - 1);
      setUserVote(-1);
    }
  };

  const handleComment = () => {
    if (commentInput.trim() !== "") {
      setCommentList([...commentList, commentInput]);
      setComments(comments + 1);
      setCommentInput("");
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Post link copied to clipboard!");
    } else {
      alert("Clipboard not supported");
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#f6f7f8',
        borderRadius: 12,
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        overflow: 'hidden',
        minWidth: 0,
      }}
    >
      {/* Card Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px 0 20px' }}>
        {/* Left: Subreddit icon, name, date, Popular */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={subredditIcon} alt="Subreddit Icon" style={{ width: 24, height: 24, borderRadius: '50%', marginRight: 6, background: '#fff' }} />
          <span style={{ color: '#222', fontWeight: 700, fontSize: 15, marginRight: 4 }}>{subreddit}</span>
          <span style={{ color: '#888', fontSize: 13, marginRight: 4 }}>&#8226; {datePosted}</span>
          <span style={{ color: '#888', fontSize: 13, marginRight: 4 }}>&#8226; Popular on Reddit right now</span>
        </div>
        {/* Right: Join, 3-dot */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{ background: '#0079d3', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 16px', fontSize: 14, fontWeight: 600, marginRight: 2 }}>Join</button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: '#888', padding: 0, marginLeft: 2 }} title="More options">&#8942;</button>
        </div>
      </div>
      {/* Title */}
      <div style={{ fontWeight: 700, fontSize: 20, margin: '12px 20px 0 20px', color: '#222', lineHeight: 1.25 }}>
        {title}
      </div>
      {/* Card Image */}
      <div style={{ width: '100%', height: 240, overflow: 'hidden', background: '#ddd', marginTop: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      {/* Card Content/Description */}
      <div style={{ padding: '16px 20px', color: '#444', fontSize: 15 }}>
        {description}
      </div>
      {/* Upvote/Downvote/Comment/Share Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 24,
        padding: '12px 20px',
        borderTop: '1px solid #eee',
        background: '#fff',
      }}>
        <button onClick={handleUpvote} style={{ background: 'none', border: 'none', color: userVote === 1 ? '#ff4500' : '#888', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }} title="Upvote">
          ↑
        </button>
        <span style={{ fontWeight: 600, fontSize: 16, minWidth: 24, textAlign: 'center', color: votes === 0 ? '#888' : votes > 0 ? '#ff4500' : '#0079d3' }}>{votes}</span>
        <button onClick={handleDownvote} style={{ background: 'none', border: 'none', color: userVote === -1 ? '#0079d3' : '#888', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }} title="Downvote">
          ↓
        </button>
        <button style={{ background: 'none', border: 'none', color: '#888', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }} title="Comment">
          💬 <span style={{ fontSize: 15 }}>{comments}</span>
        </button>
        <button onClick={handleShare} style={{ background: 'none', border: 'none', color: '#888', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }} title="Share">
          🔗
        </button>
      </div>
      {/* Comment Input */}
      <div style={{ padding: '12px 20px', background: '#fff', borderTop: '1px solid #eee' }}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentInput}
          onChange={e => setCommentInput(e.target.value)}
          style={{ width: '80%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginRight: 8 }}
        />
        <button onClick={handleComment} style={{ background: '#ff4500', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', fontWeight: 600, fontSize: 15 }}>
          Post
        </button>
      </div>
      {/* Display Comments */}
      {commentList.length > 0 && (
        <div style={{ padding: '12px 20px', background: '#f6f7f8', borderTop: '1px solid #eee' }}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Comments:</div>
          {commentList.map((c, i) => (
            <div key={i} style={{ marginBottom: 6, color: '#333', fontSize: 15, background: '#fff', borderRadius: 6, padding: 8 }}>{c}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard; 