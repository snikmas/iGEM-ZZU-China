import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';

function App() {
  // 监听滚动事件，控制侧边栏样式
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sidebar = document.querySelector('.view-sidebar');
      
      if (sidebar) {
        if (scrollPosition < 590) {
          sidebar.classList.remove('fixed-top');
          const height = 590 - scrollPosition;
          sidebar.style.top = `${height}px`;
        } else {
          sidebar.style.removeProperty('top');
          sidebar.classList.add('fixed-top');
        }
      }
    };

    // 初始加载时执行一次
    handleScroll();
    
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll);
    
    // 组件卸载时移除事件监听
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router basename='/zzu-china'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;