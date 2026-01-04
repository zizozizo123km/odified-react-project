src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    @apply bg-gray-100;
}

.icon-btn {
    @apply p-2 rounded-full hover:bg-gray-200 cursor-pointer transition-colors duration-150;
}

.sidebar-item {
    @apply flex items-center p-3 space-x-3 rounded-xl hover:bg-gray-200 cursor-pointer transition-colors duration-150;
}

.feed-input-btn {
    @apply flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-150;
}

src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

src/components/Header.jsx
import React from 'react';
import { Home, Users, Storefront, Bell, MessageSquare, Menu, Search, X } from 'lucide-react';

const Header = () => {
  const NavIcon = ({ Icon, active = false }) => (
    <div className={`flex items-center justify-center h-14 w-32 px-10 border-b-4 ${active ? 'border-blue-500' : 'border-transparent hover:bg-gray-200 rounded-lg'}`}>
      <Icon className={`h-7 w-7 ${active ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 transition-colors duration-150`} />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-2 flex items-center justify-between">
      {/* Left Section (Logo & Search) */}
      <div className="flex items-center space-x-2">
        {/* Facebook Logo Placeholder (Blue F) */}
        <div className="text-white bg-blue-600 h-10 w-10 flex items-center justify-center rounded-full text-2xl font-bold">f</div>
        <div className="hidden lg:flex items-center bg-gray-100 p-2 rounded-full">
          <Search className="h-5 w-5 text-gray-500 ml-1" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex ml-2 outline-none bg-transparent placeholder-gray-500 w-48"
          />
        </div>
      </div>

      {/* Middle Section (Navigation Icons) */}
      <div className="flex justify-center flex-1 mx-2">
        <NavIcon Icon={Home} active />
        <NavIcon Icon={Users} />
        <NavIcon Icon={Storefront} />
        <NavIcon Icon={Menu} className="lg:hidden" />
      </div>

      {/* Right Section (User & Actions) */}
      <div className="flex items-center space-x-2">
        {/* Profile Avatar Placeholder */}
        <div className="w-10 h-10 bg-gray-400 rounded-full cursor-pointer hover:opacity-80 transition-opacity"></div>
        
        <div className="icon-btn bg-gray-200">
          <Menu className="h-6 w-6 text-black" />
        </div>
        <div className="icon-btn bg-gray-200">
          <MessageSquare className="h-6 w-6 text-black" />
        </div>
        <div className="icon-btn bg-gray-200">
          <Bell className="h-6 w-6 text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;

src/components/SidebarLeft.jsx
import React from 'react';
import { Users, User, Clock, Monitor, ShoppingBag, ChevronDown } from 'lucide-react';

const SidebarLeft = () => {
  const links = [
    { icon: User, label: "Profile Name Placeholder" }, // Should be dynamic
    { icon: Users, label: "Friends" },
    { icon: Clock, label: "Memories" },
    { icon: ShoppingBag, label: "Marketplace" },
    { icon: Monitor, label: "Watch" },
  ];

  return (
    <div className="hidden lg:block w-64 p-2 pt-4 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
      {links.map((link, index) => (
        <div key={index} className="sidebar-item">
          {index === 0 ? (
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          ) : (
            <link.icon className="h-8 w-8 text-blue-500" />
          )}
          <span className="font-medium text-sm">{link.label}</span>
        </div>
      ))}
      <div className="sidebar-item">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <ChevronDown className="h-5 w-5 text-black" />
        </div>
        <span className="font-medium text-sm">See More</span>
      </div>
      <hr className="my-4 border-gray-300" />
      <h4 className="text-gray-600 font-semibold mb-3 ml-3">Your Shortcuts</h4>
      {/* Shortcut list placeholder */}
      <div className="sidebar-item">
        <div className="w-8 h-8 bg-red-400 rounded-lg"></div>
        <span className="font-medium text-sm">Gaming Group</span>
      </div>
    </div>
  );
};

export default SidebarLeft;

src/components/SidebarRight.jsx
import React from 'react';
import { Search, MoreHorizontal, Video, X } from 'lucide-react';

const SidebarRight = () => {
  const contacts = [
    "Alice Johnson", "Bob Williams", "Charlie Davis", "Diana Evans", "Frank Green", "Grace Hall"
  ];

  const ContactItem = ({ name }) => (
    <div className="flex items-center p-2 space-x-3 rounded-xl hover:bg-gray-200 cursor-pointer transition-colors duration-150">
      <div className="relative">
        <div className="w-9 h-9 bg-green-500 rounded-full"></div> {/* Placeholder Avatar */}
        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
      </div>
      <span className="font-medium text-sm">{name}</span>
    </div>
  );

  return (
    <div className="hidden xl:block w-72 p-2 pt-4 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
      <div className="flex justify-between items-center text-gray-600 mb-3 ml-2">
        <h4 className="font-semibold">Contacts</h4>
        <div className="flex space-x-2">
          <div className="icon-btn">
            <Video className="h-5 w-5" />
          </div>
          <div className="icon-btn">
            <Search className="h-5 w-5" />
          </div>
          <div className="icon-btn">
            <MoreHorizontal className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        {contacts.map((contact, index) => (
          <ContactItem key={index} name={contact} />
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;

src/components/PostCreator.jsx
import React from 'react';
import { Video, Image, Smile } from 'lucide-react';

const PostCreator = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      {/* Top Section: Input */}
      <div className="flex items-center border-b pb-3 border-gray-200 mb-3">
        {/* User Avatar Placeholder */}
        <div className="w-10 h-10 bg-gray-400 rounded-full mr-3"></div>
        <input
          type="text"
          placeholder="What's on your mind, [User Name]?"
          className="flex-grow bg-gray-100 p-2 rounded-full outline-none hover:bg-gray-200 transition-colors cursor-pointer"
        />
      </div>
      
      {/* Bottom Section: Actions */}
      <div className="flex justify-around">
        <div className="feed-input-btn text-red-500">
          <Video className="h-6 w-6" />
          <span className="hidden sm:inline font-medium text-sm text-gray-600">Live video</span>
        </div>
        <div className="feed-input-btn text-green-500">
          <Image className="h-6 w-6" />
          <span className="hidden sm:inline font-medium text-sm text-gray-600">Photo/video</span>
        </div>
        <div className="feed-input-btn text-yellow-500">
          <Smile className="h-6 w-6" />
          <span className="hidden sm:inline font-medium text-sm text-gray-600">Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;

src/components/FeedItem.jsx
import React from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const FeedItem = ({ name, time, content }) => {
  const InteractionButton = ({ Icon, label }) => (
    <div className="flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors flex-1">
      <Icon className="h-5 w-5 text-gray-500" />
      <span className="font-semibold text-gray-700 text-sm hidden sm:block">{label}</span>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      {/* Post Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          <div>
            <p className="font-semibold hover:underline cursor-pointer">{name}</p>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>
        <div className="icon-btn p-1">
          <MoreHorizontal className="h-6 w-6 text-gray-500" />
        </div>
      </div>

      {/* Post Content */}
      <p className="mb-4 text-gray-800">{content}</p>

      {/* Media Placeholder (Optional) */}
      <div className="bg-gray-200 h-60 w-full rounded-lg mb-4"></div>

      {/* Likes/Comments Stats */}
      <div className="flex justify-between items-center text-sm text-gray-500 border-b pb-2 mb-2">
        <div className="flex items-center space-x-1">
          <div className="bg-blue-600 p-[2px] rounded-full">
            <ThumbsUp className="h-3 w-3 text-white" fill="white" />
          </div>
          <span>1.2K</span>
        </div>
        <span className="hover:underline cursor-pointer">45 comments</span>
      </div>

      {/* Interactions Bar (Like, Comment, Share) */}
      <div className="flex justify-around pt-1">
        <InteractionButton Icon={ThumbsUp} label="Like" />
        <InteractionButton Icon={MessageCircle} label="Comment" />
        <InteractionButton Icon={Share2} label="Share" />
      </div>
    </div>
  );
};

export default FeedItem;

src/pages/Home.jsx
import React from 'react';
import PostCreator from '../components/PostCreator';
import FeedItem from '../components/FeedItem';

const Home = () => {
  const dummyFeed = [
    { name: "Global News", time: "1 hour ago", content: "Exciting new features were announced at the developer conference today! #Tech #Innovation" },
    { name: "Local Community", time: "5 hours ago", content: "Remember to join the neighborhood cleanup drive this weekend!" },
    { name: "Travel Enthusiast", time: "Yesterday", content: "Just landed in Paris! The Eiffel Tower views are stunning." },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto pt-6">
      
      {/* Stories Placeholder (optional, keeping it simple for now) */}
      {/* <div className="bg-white h-40 w-full rounded-lg shadow-md mb-6"></div> */}

      {/* Post Creator */}
      <PostCreator />

      {/* Feed */}
      {dummyFeed.map((post, index) => (
        <FeedItem 
          key={index}
          name={post.name}
          time={post.time}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Home;

src/App.jsx
import React from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex justify-center">
        {/* Left Sidebar */}
        <SidebarLeft />

        {/* Central Content (Feed) */}
        <div className="flex-grow max-w-[750px] md:pt-4">
          <Home />
        </div>

        {/* Right Sidebar (Contacts) */}
        <SidebarRight />
      </main>
    </div>
  );
};

export default App;