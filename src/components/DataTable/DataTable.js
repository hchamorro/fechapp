import React from 'react';
import './style.css';

function DataTable(props) {
  return (
    <div className="card-table">
      <div className="content">
        <h3>{props.title}</h3>
      </div>
      <div className="list-group">{props.children}</div>
    </div>
  );
}

export default DataTable;
