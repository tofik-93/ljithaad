'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowUpLine, RiArrowDownLine, RiChat3Line, RiShareLine, RiBookmarkLine, RiMoreFill } from '@remixicon/react';

interface PostCardProps {
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
  subredditIcon?: string;
}

const PostCard = ({
  id,
  image,
  title,
  subreddit,
  description,
  author,
  timestamp,
  upvotes,
  downvotes,
  comments,
  subredditIcon = '/reddit-logo.png', // Default icon
}: PostCardProps) => {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [currentUpvotes, setCurrentUpvotes] = useState(upvotes);
  const [currentDownvotes, setCurrentDownvotes] = useState(downvotes);
  const [currentCommentsCount, setCurrentCommentsCount] = useState(comments);
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
      if (type === 'up') {
        setCurrentUpvotes(prev => prev - 1);
      } else {
        setCurrentDownvotes(prev => prev - 1);
      }
    } else {
      if (userVote) {
        if (userVote === 'up') {
          setCurrentUpvotes(prev => prev - 1);
        } else {
          setCurrentDownvotes(prev => prev - 1);
        }
      }
      setUserVote(type);
      if (type === 'up') {
        setCurrentUpvotes(prev => prev + 1);
      } else {
        setCurrentDownvotes(prev => prev + 1);
      }
    }
  };

  const handleComment = () => {
    if (commentInput.trim() !== '') {
      setCommentList([...commentList, commentInput]);
      setCurrentCommentsCount(prev => prev + 1);
      setCommentInput('');
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      // Construct the full URL for the post
      navigator.clipboard.writeText(`${window.location.origin}/post/${id}`);
      alert('Post link copied to clipboard!');
    } else {
      // Fallback for browsers that don't support clipboard API
      prompt('Copy this link:', `${window.location.origin}/post/${id}`);
    }
  };

  const totalScore = currentUpvotes - currentDownvotes;

  return (
    // Added 'w-full' to ensure the card takes full width of its parent container.
    // This is crucial for proper display within flex or grid layouts.
    <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-w-0 w-full">
      {/* Card Header */}
      <div className="flex items-center justify-between p-4 pb-0">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {/* Link to subreddit page */}
          <Link href={`/r/${subreddit}`} className="flex items-center">
            <Image
              src={subredditIcon}
              alt="Subreddit Icon"
              width={24}
              height={24}
              className="rounded-full mr-2 bg-white" // Ensures icon background is white
            />
            <span className="font-semibold text-gray-800 hover:underline">r/{subreddit}</span>
          </Link>
          <span className="mx-1">•</span>
          <span>Posted by</span>
          {/* Link to author's profile page */}
          <Link href={`/u/${author}`} className="ml-1 hover:underline">
            u/{author}
          </Link>
          <span className="mx-1">•</span>
          <span>{timestamp}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded-full text-sm transition-colors duration-200">
            Join
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors duration-200" title="More options">
            <RiMoreFill size={20} />
          </button>
        </div>
      </div>

      {/* Post Title - linked to the detail page */}
      <Link href={`/post/${id}`} className="block">
        <h2 className="font-bold text-xl leading-tight mt-3 mx-4 text-gray-900 hover:text-blue-600">
          {title}
        </h2>
      </Link>

      {/* Card Image (conditionally rendered) */}
      {image && (
        <div className="w-full h-60 overflow-hidden bg-gray-100 mt-3 flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            width={800} // Optimized width for the image
            height={400} // Optimized height for the image
            className="w-full h-full object-cover" // Ensures image covers the container
            priority // Prioritize loading for initial view
          />
        </div>
      )}

      {/* Post Description/Content */}
      <div className="px-4 py-4 text-gray-700 text-base leading-relaxed">
        {description}
      </div>

      {/* Upvote/Downvote/Comment/Share/Save Bar */}
      <div className="flex items-center justify-start space-x-6 px-4 py-3 border-t border-gray-100 bg-gray-50 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          {/* Upvote Button */}
          <button
            onClick={() => handleVote('up')}
            className={`p-1 rounded-full hover:bg-gray-200 ${
              userVote === 'up' ? 'text-orange-500' : 'text-gray-400'
            } transition-colors duration-200`}
            title="Upvote"
          >
            <RiArrowUpLine size={24} />
          </button>
          {/* Vote Score */}
          <span
            className={`font-semibold text-base ${
              totalScore === 0 ? 'text-gray-700' : totalScore > 0 ? 'text-orange-500' : 'text-blue-500'
            }`}
          >
            {totalScore}
          </span>
          {/* Downvote Button */}
          <button
            onClick={() => handleVote('down')}
            className={`p-1 rounded-full hover:bg-gray-200 ${
              userVote === 'down' ? 'text-blue-500' : 'text-gray-400'
            } transition-colors duration-200`}
            title="Downvote"
          >
            <RiArrowDownLine size={24} />
          </button>
        </div>

        {/* Comments Button */}
        <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200" title="Comments">
          <RiChat3Line size={20} />
          <span>{currentCommentsCount} Comments</span>
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
          title="Share"
        >
          <RiShareLine size={20} />
          <span>Share</span>
        </button>

        {/* Save Button */}
        <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200" title="Save">
          <RiBookmarkLine size={20} />
          <span>Save</span>
        </button>
      </div>

      {/* Comment Input Section */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentInput}
            onChange={e => setCommentInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleComment}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Post
          </button>
        </div>
      </div>

      {/* Display Submitted Comments */}
      {commentList.length > 0 && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <p className="font-semibold mb-2 text-gray-700">Comments:</p>
          {commentList.map((comment, index) => (
            <div
              key={index}
              className="mb-2 p-3 bg-white rounded-md text-gray-800 text-sm shadow-sm border border-gray-200"
            >
              {comment}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;