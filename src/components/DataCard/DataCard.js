import React from 'react';
import './style.css';

function DataCard(props) {
  return (
    <div className="card">
      <div className="content">
        <h5>{props.name} Prop Name</h5>
      </div>
    </div>
  );
}

export default DataCard;
