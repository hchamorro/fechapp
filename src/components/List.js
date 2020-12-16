import React from 'react';
import { Link } from 'react-router-dom';

function Li(props) {
  return (
    <>
      <Link to={`/item/${props.id}`} className="list-group-item">
        {props.name}
      </Link>
    </>
  );
}

export default Li;
