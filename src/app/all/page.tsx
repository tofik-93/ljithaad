'use client'
import { useState } from 'react';

export default function AllContent() {
  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 p-4">
      {/* Source Section */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Source</h2>
        <div className="mb-2">
          <p className="text-sm font-medium mb-1">Sort by</p>
          <div className="pl-2 text-sm">
            <p>Byinteresting &gt; 5 hr. ago</p>
            <p>my grew braided carrots</p>
          </div>
        </div>
        <ul className="space-y-1">
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">Hot</button></li>
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">New</button></li>
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">Top</button></li>
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">Rising</button></li>
        </ul>
      </div>

      {/* Reddit Rules Section */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Reddit Rules</h2>
        <ul className="space-y-1 text-sm">
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">Privacy Policy</button></li>
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">User Agreement</button></li>
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100">Accessibility</button></li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">Reddit, Inc. © 2025. All rights reserved.</p>
      </div>
    </div>
  );
}