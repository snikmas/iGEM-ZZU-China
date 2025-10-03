import React from 'react';
import './index.css';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-header-image">
        <img 
          src="https://static.igem.wiki/teams/5115/header/notebook-header-new.gif" 
          alt="Page Header"
        />
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;