import React from 'react';
import { Empty } from 'antd';
import './index.css';

function Exception403() {
  return (
    <div>
      <div className="exception_403">
        <Empty description={false} />
        <h1>暂无数据</h1>
      </div>

    </div>

  );
}

export default Exception403;