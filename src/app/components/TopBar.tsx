const TopBar = () => (
  <header className="topbar">
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {/* Logo on the left */}
      <img src="/reddit-logo.png" alt="Reddit Logo" style={{ width: 32, height: 32, marginRight: 8, verticalAlign: 'middle' }} />
      <span style={{ fontWeight: 700, fontSize: 24, color: '#ff4500', marginRight: 24 }}>reddit</span>
      {/* Centered search bar with icon */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#f6f7f8', borderRadius: 6, border: '1px solid #eee', padding: '0 8px', minWidth: 320, width: '60%' }}>
          <span style={{ fontWeight: 700, fontSize: 20, color: '#888', marginRight: 8 }}>🔍</span>
          <input
            type="text"
            placeholder="Search Reddit"
            style={{ padding: '6px 12px', border: 'none', outline: 'none', background: 'transparent', minWidth: 0, width: '100%', borderRadius: 6 }}
          />
        </div>
      </div>
      {/* Buttons on the right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 24 }}>
        <button style={{ marginRight: 8 }}>Get App</button>
        <button style={{ background: '#ff4500', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px' }}>
          Log In
        </button>
      </div>
    </div>
  </header>
);

export default TopBar; 