import React from 'react';
import { Link } from 'react-router-dom';

function DataCardLink(props) {
  return (
    <div className="card">
      <Link to={`/item/${props.id}`} className="content">
        <h5>{props.name} </h5>
      </Link>
    </div>
  );
}

export default DataCardLink;
