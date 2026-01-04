import React, { useState } from 'react';
import './App.css'; // Assume basic styling for layout

// --- Mock Data ---
interface Post {
  id: number;
  author: string;
  avatar: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
}

const mockPosts: Post[] = [
  { id: 1, author: "Mark Z.", avatar: "MZ", timestamp: "1h ago", content: "Excited about the future of AI and the Metaverse!", likes: 1500, comments: 230 },
  { id: 2, author: "Sarah C.", avatar: "SC", timestamp: "3h ago", content: "Just adopted a new puppy! Meet Luna 🐕.", likes: 450, comments: 55 },
];

// --- Components ---

const Header: React.FC = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#4267B2', color: 'white', position: 'sticky', top: 0, zIndex: 10, height: '56px' }}>
    <div style={{ fontWeight: 'bold', fontSize: '24px' }}>facebook</div>
    <div style={{ flexGrow: 1, margin: '0 20px', maxWidth: '600px' }}>
      <input type="text" placeholder="Search Facebook" style={{ width: '100%', padding: '8px 15px', borderRadius: '50px', border: 'none', outline: 'none' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button style={{ background: 'none', border: 'none', color: 'white', marginLeft: '10px', cursor: 'pointer' }}>🏠</button>
      <button style={{ background: 'none', border: 'none', color: 'white', marginLeft: '10px', cursor: 'pointer' }}>🔔</button>
      <button style={{ background: 'none', border: 'none', color: 'white', marginLeft: '10px', cursor: 'pointer' }}>👤</button>
    </div>
  </header>
);

const Sidebar: React.FC = () => (
  <aside style={{ width: '280px', padding: '10px', position: 'fixed', height: 'calc(100vh - 56px)', top: '56px', overflowY: 'auto', backgroundColor: 'white' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ marginBottom: '15px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>🧑 My Profile</li>
      <li style={{ marginBottom: '15px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>👥 Friends</li>
      <li style={{ marginBottom: '15px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>🖼️ Marketplace</li>
      <li style={{ marginBottom: '15px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>📺 Watch</li>
      <li style={{ marginBottom: '15px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>⭐ Saved</li>
    </ul>
  </aside>
);

const PostComponent: React.FC<{ post: Post }> = ({ post }) => (
  <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', marginBottom: '15px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4267B2', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontWeight: 'bold' }}>{post.avatar}</div>
      <div>
        <strong style={{ display: 'block' }}>{post.author}</strong>
        <span style={{ fontSize: '12px', color: '#606770' }}>{post.timestamp}</span>
      </div>
    </div>
    <p style={{ margin: '10px 0', fontSize: '15px' }}>{post.content}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #ddd', paddingTop: '10px', marginTop: '10px' }}>
      <button style={{ border: 'none', background: 'none', color: '#606770', cursor: 'pointer' }}>👍 Like ({post.likes})</button>
      <button style={{ border: 'none', background: 'none', color: '#606770', cursor: 'pointer' }}>💬 Comment ({post.comments})</button>
      <button style={{ border: 'none', background: 'none', color: '#606770', cursor: 'pointer' }}>↪️ Share</button>
    </div>
  </div>
);

const CreatePost: React.FC = () => (
    <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#CCC', marginRight: '10px' }}></div>
            <input
                type="text"
                placeholder="What's on your mind?"
                style={{ flexGrow: 1, padding: '10px', borderRadius: '20px', border: '1px solid #ddd', outline: 'none' }}
            />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #eee', paddingTop: '10px' }}>
            <button style={{ background: 'none', border: 'none', color: '#F02849', cursor: 'pointer' }}>🔴 Live Video</button>
            <button style={{ background: 'none', border: 'none', color: '#45BD62', cursor: 'pointer' }}>📷 Photo/Video</button>
            <button style={{ background: 'none', border: 'none', color: '#F7B539', cursor: 'pointer' }}>😄 Feeling/Activity</button>
        </div>
    </div>
);


const Feed: React.FC = () => (
  <div style={{ flexGrow: 1, paddingTop: '20px', paddingLeft: '300px', paddingRight: '20px' }}>
    <main style={{ maxWidth: '600px', margin: '0 auto' }}>
        <CreatePost />
        {mockPosts.map(post => (
        <PostComponent key={post.id} post={post} />
        ))}
    </main>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
    // Setting up global body style override for Facebook feel
    React.useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.fontFamily = 'Arial, sans-serif';
        document.body.style.backgroundColor = '#F0F2F5';
    }, []);
    
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', marginTop: '0px' }}>
                <Sidebar />
                <Feed />
            </div>
        </div>
    );
};

export default App;

// Assuming this component is imported and rendered in src/main.tsx
// (File structure context requires main app file content)
import ReactDOM from 'react-dom/client';
import './index.css'; // Placeholder for potential global CSS if needed

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);