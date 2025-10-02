import React, { useState, useEffect } from 'react';
import './index.css';
import { ArrowUpOutlined } from '@ant-design/icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollContainer = () => {
    // 检查统一的滚动容器
    const viewMain = document.querySelector('.view-main');
    
    let scrollTop;
    
    // 检查元素是否可见且可滚动
    const isElementVisible = (el) => el && el.offsetHeight > 0 && el.scrollHeight > el.clientHeight;
    
    if (isElementVisible(viewMain)) {
      // 使用统一的.view-main容器
      scrollTop = viewMain.scrollTop;
    } else {
      // 备用方案：使用window滚动
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
    
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    // 立即检查一次
    checkScrollContainer();

    // 监听window滚动
    window.addEventListener('scroll', checkScrollContainer);
    
    // 监听统一的滚动容器
    const viewMain = document.querySelector('.view-main');
    
    if (viewMain) {
      viewMain.addEventListener('scroll', checkScrollContainer);
    }

    // 监听路由变化 - 使用MutationObserver监听DOM变化
    const observer = new MutationObserver(() => {
      // 延迟检查，确保DOM完全更新
      setTimeout(checkScrollContainer, 50);
    });

    // 观察整个body的变化
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    // 定期检查（作为备用方案）
    const interval = setInterval(checkScrollContainer, 1000);

    return () => {
      window.removeEventListener('scroll', checkScrollContainer);
      if (viewMain) {
        viewMain.removeEventListener('scroll', checkScrollContainer);
      }
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    // 检测统一的滚动容器
    const viewMain = document.querySelector('.view-main');
    
    const isElementVisible = (el) => el && el.offsetHeight > 0 && el.scrollHeight > el.clientHeight;
    
    if (isElementVisible(viewMain)) {
      viewMain.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="scroll-progress-indicator" onClick={scrollToTop}>
      <div className="progress-circle">
        <ArrowUpOutlined />
      </div>
      <div className="scroll-tooltip">Back to Top</div>
    </div>
  );
};

export default ScrollToTop;