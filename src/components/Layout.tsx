import { Outlet, Link } from 'react-router-dom';


// --- Static Navigation Data ---
const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Suppliers', path: '/suppliers', icon: '🔗' },
  { name: 'Compliance Hub', path: '/compliance', icon: '📜' },
  { name: 'Incentive Engine', path: '/incentives', icon: '⭐' },
  { name: 'Green Finance', path: '/finance', icon: '💰' },
];

// --- Sidebar Component ---
const Sidebar = () => (
  <aside style={{ 
    width: '240px', 
    height: '100vh', 
    padding: '24px 0', 
    backgroundColor: '#fff', 
    borderRight: '1px solid #eee', 
    display: 'flex', 
    flexDirection: 'column',
    flexShrink: 0
  }}>
    {/* Platform Logo/Name */}
    <div style={{ 
      padding: '0 24px', 
      marginBottom: '30px', 
      fontWeight: 'bold', 
      fontSize: '1.4rem', 
      color: '#006400' 
    }}>
      🌲 ABC ESG-Link
    </div>

    {/* Navigation Links */}
    <nav style={{ flexGrow: 1 }}>
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '10px 24px', 
            textDecoration: 'none', 
            color: '#333', 
            fontSize: '1rem', 
            fontWeight: '500',
            transition: 'background-color 0.1s',
          }}
          // Basic hover/active style simulation
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span style={{ marginRight: '10px' }}>{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </nav>
    
    {/* Settings Link (Bottom of Sidebar) */}
    <Link 
      to="/settings"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '10px 24px', 
        textDecoration: 'none', 
        color: '#555', 
        fontSize: '0.9rem', 
        borderTop: '1px solid #eee',
        marginTop: '20px'
      }}
    >
      ⚙️ System Settings
    </Link>
  </aside>
);


// --- Main Layout Component ---
const Layout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
    <Sidebar />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        <Outlet /> {/* Renders the current route component */}
      </main>
    </div>
  </div>
);

export default Layout;