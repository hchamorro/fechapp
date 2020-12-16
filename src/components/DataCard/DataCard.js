import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function DataCard(props) {
  return (
    <div className="card">
      <div className="content">
        <h5>{props.name} </h5>
      </div>
    </div>
  );
}

export default DataCard;
