import React from 'react';

function Li(props) {
  return (
    <>
      <a href="#" className="list-group-item">
        {props.name}
      </a>
    </>
  );
}

export default Li;
