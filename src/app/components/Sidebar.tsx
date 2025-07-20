"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [internetCultureOpen, setInternetCultureOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const [qasOpen, setQasOpen] = useState(false);
  const [popCultureOpen, setPopCultureOpen] = useState(false);

  return (
    <aside className="sidebar" style={{ padding: 0 }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {/* Home/Popular/Answers */}
          <li style={{ display: 'flex', alignItems: 'center', padding: '12px 24px', fontWeight: 500, background: '#f2f4f5', borderRadius: 8, margin: '8px 8px 0 8px', color: '#878a8c', fontSize: 15 }}>
            <span style={{ fontSize: 20, marginRight: 16 }}>🏠</span> Home
          </li>
          <li style={{ display: 'flex', alignItems: 'center', padding: '12px 24px', fontWeight: 500, background: '#e9ecef', borderRadius: 8, margin: '8px 8px 0 8px', color: '#878a8c', fontSize: 15 }}>
            <span style={{ fontSize: 20, marginRight: 16 }}>🔥</span> Popular
          </li>
          <li style={{ display: 'flex', alignItems: 'center', padding: '12px 24px', fontWeight: 500, margin: '8px 8px 0 8px', color: '#878a8c', fontSize: 15 }}>
            <span style={{ fontSize: 20, marginRight: 16 }}>💬</span> Answers <span style={{ color: '#ff4500', fontSize: 10, marginLeft: 4 }}>BETA</span>
          </li>
          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '16px 0' }} />
          {/* Recent */}
          <li style={{ padding: '0 24px', color: '#888', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>RECENT</li>
          <li style={{ display: 'flex', alignItems: 'center', padding: '8px 24px', fontWeight: 500, color: '#878a8c', fontSize: 15 }}>
            <span style={{ fontSize: 20, marginRight: 16 }}>🖤</span> r/dndnext
          </li>
          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '16px 0' }} />
          {/* Topics (collapsible) */}
          <li style={{ padding: '0 24px', color: '#888', fontWeight: 700, fontSize: 13, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            TOPICS <span style={{ fontSize: 16 }}>▼</span>
          </li>
          <ul style={{ listStyle: 'none', paddingLeft: 24, marginBottom: 8 }}>
            {/* Internet Culture (Viral) */}
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer' }} onClick={() => setInternetCultureOpen((v) => !v)}>
              <span style={{ fontSize: 20, marginRight: 12 }}>😃</span> Internet Culture (Viral)
              <span style={{ marginLeft: 'auto', fontSize: 14, fontWeight: 400 }}>{internetCultureOpen ? '▼' : '▶'}</span>
            </li>
            {internetCultureOpen && (
              <ul style={{ listStyle: 'none', paddingLeft: 32, margin: '4px 0 0 0' }}>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Amazing</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Animal & Pets</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Cringe & Facepalm</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Funny</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Interesting</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Memes</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Oddly Satisfying</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Reddit Meta</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Wholesome & Heartwarming</li>
              </ul>
            )}
            {/* Games */}
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer' }} onClick={() => setGamesOpen((v) => !v)}>
              <span style={{ fontSize: 20, marginRight: 12 }}>🎮</span> Games
              <span style={{ marginLeft: 'auto', fontSize: 14, fontWeight: 400 }}>{gamesOpen ? '▼' : '▶'}</span>
            </li>
            {gamesOpen && (
              <ul style={{ listStyle: 'none', paddingLeft: 32, margin: '4px 0 0 0' }}>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Action</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Adventure</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>RPG</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Shooter</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Sports</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Strategy</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Simulation</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Puzzle</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Racing</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Indie</li>
              </ul>
            )}
            {/* Q&As */}
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer' }} onClick={() => setQasOpen((v) => !v)}>
              <span style={{ fontSize: 20, marginRight: 12 }}>❓</span> Q&As
              <span style={{ marginLeft: 'auto', fontSize: 14, fontWeight: 400 }}>{qasOpen ? '▼' : '▶'}</span>
            </li>
            {qasOpen && (
              <ul style={{ listStyle: 'none', paddingLeft: 32, margin: '4px 0 0 0' }}>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>AskReddit</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>NoStupidQuestions</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>ExplainLikeImFive</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>TooAfraidToAsk</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>OutOfTheLoop</li>
              </ul>
            )}
            {/* Technology */}
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer' }} onClick={() => setTechnologyOpen((v) => !v)}>
              <span style={{ fontSize: 20, marginRight: 12 }}>💻</span> Technology
              <span style={{ marginLeft: 'auto', fontSize: 14, fontWeight: 400 }}>{technologyOpen ? '▼' : '▶'}</span>
            </li>
            {technologyOpen && (
              <ul style={{ listStyle: 'none', paddingLeft: 32, margin: '4px 0 0 0' }}>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Gadgets</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Programming</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>AI & Machine Learning</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Tech News</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Startups</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Science</li>
              </ul>
            )}
            {/* Pop Culture */}
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer' }} onClick={() => setPopCultureOpen((v) => !v)}>
              <span style={{ fontSize: 20, marginRight: 12 }}>🎬</span> Pop Culture
              <span style={{ marginLeft: 'auto', fontSize: 14, fontWeight: 400 }}>{popCultureOpen ? '▼' : '▶'}</span>
            </li>
            {popCultureOpen && (
              <ul style={{ listStyle: 'none', paddingLeft: 32, margin: '4px 0 0 0' }}>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Movies</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>TV Shows</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Music</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Celebrities</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Books</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Comics</li>
                <li style={{ padding: '4px 0', color: '#878a8c', fontSize: 15 }}>Anime & Manga</li>
              </ul>
            )}
            {/* Movies & TV */}
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}><span style={{ fontSize: 20, marginRight: 12 }}>📺</span> Movies & TV</li>
            <li style={{ color: '#0079d3', marginTop: 4, cursor: 'pointer', padding: '8px 0' }}>See more</li>
          </ul>
          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '16px 0' }} />
          {/* Resources (collapsible) */}
          <li style={{ padding: '0 24px', color: '#888', fontWeight: 700, fontSize: 13, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            RESOURCES <span style={{ fontSize: 16 }}>▼</span>
          </li>
          <ul style={{ listStyle: 'none', paddingLeft: 24, marginBottom: 8 }}>
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0', color: '#888' }}><span style={{ fontSize: 20, marginRight: 12 }}>ℹ️</span> About Reddit</li>
          </ul>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 