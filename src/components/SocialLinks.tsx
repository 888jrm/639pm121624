import React from 'react';
import { Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Connect With Us</h2>
      <div className="flex justify-center">
        <a
          href="https://www.instagram.com/connectedinnergy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Instagram className="w-8 h-8 text-green-400" />
          <div>
            <h3 className="font-semibold text-green-400">Instagram</h3>
            <p className="text-gray-300">@connectedinnergy</p>
          </div>
        </a>
      </div>
    </div>
  );
}