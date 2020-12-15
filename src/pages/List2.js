import React, { useEffect, useState } from 'react';
import DataCard from '../components/DataCard/DataCard';

const List2 = (props) => {
  return (
    <>
      <div className="App">
        <h1> List by ID 2</h1>
      </div>
      <DataCard name="will be passed" />
    </>
  );
};

export default List2;
