"use client";

import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const TopBar = () => (
  <header className="topbar">
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {/* Logo on the left */}
      <img src="/redditlogo.jpeg" alt="Reddit Logo" style={{ width: 24, height: 24, marginRight: 4, verticalAlign: 'middle' }} />
      <span style={{ fontWeight: 700, fontSize: 18, color: '#ff4500', marginRight: 12 }}>reddit</span>
      {/* Centered search bar with icon */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#f6f7f8', borderRadius: 6, border: '1px solid #eee', padding: '0 4px', minWidth: 200, width: '40%' }}>
          <SearchIcon style={{ color: '#888', fontSize: 20, marginRight: 4 }} />
          <input
            type="text"
            placeholder="Search Reddit"
            style={{ padding: '4px 8px', border: 'none', outline: 'none', background: 'transparent', minWidth: 0, width: '100%', borderRadius: 6, fontSize: 14 }}
          />
        </div>
      </div>
      {/* Icons and buttons on the right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 12 }}>
        {/* Ads Icon */}
        <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} title="Ads">
          <img src="/adsicon.png" alt="Ads" style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #eee', background: '#fff' }} />
        </button>
        {/* Open Chat Icon */}
        <button style={{ background: 'none',color: '#888', border: 'none', fontSize: 22, cursor: 'pointer' }} title="Open Chat"><SmsIcon/></button>
        {/* + Create Button */}
        <button style={{  color: '#000', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}><AddIcon /> Create</button>
        {/* Notification Icon */}
        <button style={{ background: 'none',color: '#888', border: 'none', fontSize: 22, cursor: 'pointer' }} title="Notifications"><NotificationsNoneIcon/></button>
        {/* Profile Avatar */}
        <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} title="Profile">
          <img src="/reddit-logo.png" alt="Profile" style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #eee', background: '#fff' }} />
        </button>
      </div>
    </div>
  </header>
);

export default TopBar; 