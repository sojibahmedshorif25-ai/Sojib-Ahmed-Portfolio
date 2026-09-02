import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import ChatBot from './components/chatbot/ChatBot';
import Home from './pages/Home';
import AdminPage from './pages/Admin';
import NotFoundPage from './pages/NotFound';
import { useTheme } from './hooks/useTheme';
import { initEasterEggs } from './utils/easterEggs';

function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    // Init easter eggs
    initEasterEggs();
    
    // Loading screen timer
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className={`relative min-h-screen ${theme}`} style={{ background: 'var(--color-bg)' }}>
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Custom cursor (desktop only) */}
        <CustomCursor />
        
        {/* Scroll progress bar */}
        <ScrollProgress />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Routes */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* AI Chatbot */}
        <ChatBot />
        
        {/* Toast notifications */}
        <Toaster
          position="bottom-left"
          toastOptions={{
            style: {
              background: '#0D0D14',
              color: '#F0F0F5',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '12px',
              fontFamily: 'Inter, sans-serif',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
