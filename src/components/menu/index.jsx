import React from 'react';
import './index.css';

// 导入默认图标和hover图标
import defaultIcon from 'https://static.igem.wiki/teams/5822/newassets/images/education/menuIconDefault.png';
import hoverIcon from 'https://static.igem.wiki/teams/5822/newassets/images/education/menuIconHover.png';

const Menu = ({ 
  defaultSrc = defaultIcon, 
  hoverSrc = hoverIcon, 
  alt = "Menu Icon",
  size = 20 
}) => {
  return (
    <div className="menu-icon-wrapper" style={{ width: size, height: size }}>
      <img 
        src={defaultSrc} 
        alt={alt} 
        className="menu-icon default" 
      />
      <img 
        src={hoverSrc} 
        alt={alt} 
        className="menu-icon hover" 
      />
    </div>
  );
};

export default Menu;