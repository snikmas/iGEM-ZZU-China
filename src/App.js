import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Home from './pages/home';
import './App.css';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // 每次路由变化时重置标志
    let scrollRestored = false;

    const updateSidebarStyle = () => {
      const scrollPosition = window.scrollY;
      const sidebar = document.querySelector('.view-sidebar');
      const headerElement = document.querySelector('.page-header-image');
      
      if (!sidebar || !headerElement) return;
      
      const headerHeight = headerElement.offsetHeight + 90;
      
      if (scrollPosition < headerHeight) {
        sidebar.classList.remove('fixed-top');
        sidebar.style.top = `${headerHeight - scrollPosition}px`;
      } else {
        sidebar.style.removeProperty('top');
        sidebar.classList.add('fixed-top');
      }
    };

    const restoreScroll = () => {
      if (scrollRestored) return;
      scrollRestored = true;

      const savedPosition = localStorage.getItem(`scrollPosition_${location.pathname}`);
      
      if (savedPosition) {
        const position = parseInt(savedPosition, 10);
        
        // 直接设置滚动位置，然后强制更新侧边栏
        window.scrollTo(0, position);
        
        // 多次强制更新，确保侧边栏位置正确
        const forceUpdates = [100, 200, 300, 500];
        forceUpdates.forEach(delay => {
          setTimeout(updateSidebarStyle, delay);
        });
      }
      
      updateSidebarStyle();
    };

    // 简单的重试机制
    let retries = 0;
    const tryRestore = () => {
      if (document.querySelector('.view-sidebar') && document.querySelector('.page-header-image')) {
        restoreScroll();
      } else if (retries < 10) {
        retries++;
        setTimeout(tryRestore, 100);
      }
    };

    tryRestore();

    const handleScroll = () => {
      localStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
      updateSidebarStyle();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router basename='/zzu-china'>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;