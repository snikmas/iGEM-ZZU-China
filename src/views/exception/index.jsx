import React, { useState } from 'react';
import { Empty } from 'antd';
import './index.css';


function Exception_403() {


  return (
    <div className="exception_403">
      <Empty description={false} />
      <h1>403 无访问权限</h1>
    </div>
  );
}

export default Exception_403;