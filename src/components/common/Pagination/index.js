import React from 'react';
import { Button } from 'antd';
import './style.css';

function Pagination() {
  return (
    <div className="pagination-container">
      <Button className="pagination-item" icon="left" />
      <Button className="pagination-item">1</Button>
      <Button type="primary" className="pagination-item">
        2
      </Button>
      <Button className="pagination-item">3</Button>
      <Button className="pagination-item" icon="right" />
    </div>
  );
}

export default Pagination;
