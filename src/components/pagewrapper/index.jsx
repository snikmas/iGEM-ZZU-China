import React from 'react';
import './index.css';

const PageWrapper = ({ children , headerImage }) => {
  
  return (
    <div className="page-wrapper">
      <div className="page-header-image">
        <img 
          src={headerImage}
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