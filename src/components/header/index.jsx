import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { AppstoreOutlined } from '@ant-design/icons';


const headerLogo = 'https://static.igem.wiki/teams/5822/newassets/headerlogo/headerlogo.webp';

function Header() {

  const routers = [
    {
      key: '/',
      icon: '',
      label: 'Home',
      element: '',
      subMenu: []
    },
    {
      key: '/team',
      icon: '',
      label: 'Team',
      element: '',
      subMenu: [
        { key: '/team/members', icon: '', label: 'Members', element: '' },
        { key: '/team/attributions', icon: '', label: 'Attributions', element: '' }
      ]
    },
    {
      key: '/project',
      icon: '',
      label: 'Project',
      element: '',
      subMenu: [
        { key: '/project/description', icon: '', label: 'Description', element: '' },
        { key: '/project/engineering', icon: '', label: 'Engineering', element: '' },
        { key: '/project/contribution', icon: '', label: 'Contribution', element: '' },
        { key: '/project/development', icon: '', label: 'Development', element: '' }
      ]
    },
    {
      key: '/wet-lab',
      icon: '',
      label: 'Wet Lab',
      element: '',
      subMenu: [
        { key: '/wet-lab/experiments', icon: '', label: 'Experiments', element: '' },
        { key: '/wet-lab/results', icon: '', label: 'Results', element: '' },
        { key: '/wet-lab/notebook', icon: '', label: 'Notebook', element: '' },
        { key: '/wet-lab/parts', icon: '', label: 'Parts', element: '' },
        { key: '/wet-lab/safety', icon: '', label: 'Safety', element: '' }
      ]
    },
    {
      key: '/dry-lab',
      icon: '',
      label: 'Dry Lab',
      element: '',
      subMenu: [
        { key: '/dry-lab/model', icon: '', label: 'Model', element: '' },
        { key: '/dry-lab/software', icon: '', label: 'Software', element: '' }
      ]
    },
    {
      key: '/education',
      icon: '',
      label: 'Education',
      element: '',
      subMenu: []
    },
    {
      key: '/human-practice',
      icon: '',
      label: 'Human Practice',
      element: '',
      subMenu: [
        { key: '/human-practice/integrated-human-practices', icon: '', label: 'Integrated Human Practices', element: '' },
        { key: '/human-practice/entrepreneurship', icon: '', label: 'Entrepreneurship', element: '' },
        { key: '/human-practice/collaborations', icon: '', label: 'Collaborations', element: '' }
      ]
    }
  ];

  // 应用面板数据：直达常用页面
  const apps = [
    { key: 'members', label: 'Members', icon: '👥', link: '/team/members' },
    { key: 'engineering', label: 'Engineering', icon: '🛠️', link: '/project/engineering' },
    { key: 'contribution', label: 'Contribution', icon: '🤝', link: '/project/contribution' },
    { key: 'experiments', label: 'Experiments', icon: '🧪', link: '/wet-lab/experiments' },
    { key: 'model', label: 'Model', icon: '📊', link: '/dry-lab/model' },
  ];

  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(routers[0]?.key || '/');
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const [panelLeft, setPanelLeft] = useState(0);
  const [appsOpen, setAppsOpen] = useState(false);


  const current = routers.find(r => r.key === activeKey) || { subMenu: [] };

  // 计算面板位置的函数
  const calculatePanelPosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPanelTop(rect.bottom - 6);
    setPanelLeft(rect.left);
  };


  return (
    <div className="home-header-wrapper">
      <div className="home-header">
        <div className="home-header-logo">
          <img src={headerLogo} alt="Header Logo" />
        </div>

        <div
          className="home-header-nav"
          onMouseLeave={() => {
            setPanelOpen(false);
          }}
        >
          {routers.map(item => {
            const hasSub = item.subMenu && item.subMenu.length > 0;
            return (
              <div
                key={item.key}
                className={`nav-item ${activeKey === item.key ? 'active' : ''}`}
                onMouseEnter={(event) => {
                  setActiveKey(item.key);
                  calculatePanelPosition(event);
                  setPanelOpen(!!hasSub);
                }}
                onClick={() => {
                  // 如果有子菜单，不执行导航
                  if (!hasSub) {
                    navigate(item.key);
                  }
                }}
              >
                <span className="nav-label">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* 右上角应用九宫格 */}
        <div
          className="home-header-apps"
          onMouseEnter={() => setAppsOpen(true)}
          onMouseLeave={() => setAppsOpen(false)}
        >
          <div className={`apps-trigger ${appsOpen ? 'active' : ''}`}>
            {/* {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="dot"></span>
            ))} */}
            <AppstoreOutlined />
          </div>

          <div className={`apps-panel ${appsOpen ? 'open' : ''}`}>
            <div className="apps-grid">
              {apps.map(a => (
                <div
                  key={a.key}
                  className="app-item"
                  onClick={() => {
                    navigate(a.link || '/');
                    setAppsOpen(false);
                  }}
                >
                  <div className="app-icon">{a.icon}</div>
                  <div className="app-label">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* 假设 current 是当前被悬停的菜单项 */}
      <div
        className={`mega-panel ${panelOpen ? 'open' : ''}`}
        style={{
          top: panelTop, // 动态设置 top
          left: panelLeft, // 动态设置 left
        }}
        onMouseEnter={() => setPanelOpen(true)}
        onMouseLeave={() => {
          setPanelOpen(false);
          setActiveKey(null);
        }}
      >
        <div className="mega-inner">
          <div className="mega-left">
            {(current.subMenu || []).map(sm => (
              <div
                key={sm.key}
                className="mega-left-item"
                onClick={() => {
                  navigate(sm.key);
                  setPanelOpen(false);
                }}
              >
                {sm.label}
              </div>
            ))}
            {(!current.subMenu || current.subMenu.length === 0) && (
              <div className="mega-empty">No submenu</div>
            )}
          </div>
        </div>
      </div>



    </div>
  );
}

export default Header;