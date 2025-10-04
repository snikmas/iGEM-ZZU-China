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
        if (scrollPosition < 450) {
          // 滚动距离小于450px时，固定高度为450px
          sidebar.classList.remove('fixed-top');
        } else {
          // 滚动距离大于等于450px时，固定在顶部
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;