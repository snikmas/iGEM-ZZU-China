import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'; // 添加这行导入
import Home from './pages/home';
import './App.css';

function App() {
  // 监听滚动事件，控制侧边栏样式和图片模糊效果
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sidebar = document.querySelector('.view-sidebar');
      const headerImage = document.querySelector('.page-header-image img');
      const headerHeight = document.querySelector('.page-header-image').offsetHeight + 90;
      
      // 侧边栏逻辑保持不变
      if (sidebar) {
        if (scrollPosition < headerHeight) {
          sidebar.classList.remove('fixed-top');
          const height = headerHeight - scrollPosition;
          sidebar.style.top = `${height}px`;
        } else {
          sidebar.style.removeProperty('top');
          sidebar.classList.add('fixed-top');
        }
      }
      
      // 添加滚动模糊效果
      if (headerImage) {
        // 根据滚动位置计算模糊程度，滚动100px时达到最大模糊度8px
        const blurAmount = Math.min(scrollPosition / 100 * 8, 8);
        headerImage.style.filter = `blur(${blurAmount}px)`;
        // 同时添加淡入效果
        headerImage.style.opacity = Math.max(1 - scrollPosition / 300, 0.3);
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