import React from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import { MessageCircle, Users, Share2, ArrowUp, MessageSquare } from 'lucide-react';

interface Post {
  title: string;
  author: string;
  content: string;
  upvotes: number;
  comments: number;
  tags: string[];
  timeAgo: string;
}

export default function Community() {
  const posts: Post[] = [
    {
      title: "My Journey with Connected Innergy Meditation",
      author: "spiritual_seeker",
      content: "I've been practicing the guided meditations for a month now and the transformation in my daily life has been incredible...",
      upvotes: 128,
      comments: 32,
      tags: ["Meditation", "Experience"],
      timeAgo: "2h"
    },
    {
      title: "Weekly Group Meditation Thread",
      author: "meditation_guide",
      content: "Join us for our weekly virtual group meditation session. Share your experiences and connect with fellow practitioners...",
      upvotes: 256,
      comments: 45,
      tags: ["Weekly Thread", "Group Session"],
      timeAgo: "5h"
    },
    {
      title: "Spiritual Growth Resources Megathread",
      author: "inner_peace",
      content: "A comprehensive collection of books, videos, and practices that have helped our community members on their spiritual journey...",
      upvotes: 512,
      comments: 89,
      tags: ["Resources", "Guide"],
      timeAgo: "1d"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Connected Innergy Community</h1>
            <p className="text-xl text-gray-300">Join our community of spiritual seekers</p>
            
            <a
              href="https://www.reddit.com/r/connectedinnergy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors mt-6"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Join Our Reddit Community</span>
            </a>
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center space-y-2">
                    <button className="text-gray-400 hover:text-orange-500 transition-colors">
                      <ArrowUp className="w-6 h-6" />
                    </button>
                    <span className="text-sm font-medium">{post.upvotes}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                      <span>Posted by u/{post.author}</span>
                      <span>•</span>
                      <span>{post.timeAgo}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{post.content}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MessageSquare className="w-5 h-5" />
                        <span>{post.comments} comments</span>
                      </div>
                      <div className="flex space-x-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-white/5 px-2 py-1 rounded text-sm text-green-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Users className="w-8 h-8 text-green-400" />
              <div>
                <h2 className="text-xl font-semibold">Community Guidelines</h2>
                <p className="text-gray-300">Foster a positive and supportive environment</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Be respectful and kind to all members</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Share experiences and support others</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Keep discussions focused on spiritual growth</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Maintain a sacred and peaceful space</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}