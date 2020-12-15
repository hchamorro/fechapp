import React, { useEffect, useState } from 'react';
import DataCard from '../components/DataCard/DataCard';

const List3 = (props) => {
  return (
    <>
      <div className="App">
        <h1> List by ID 3</h1>
      </div>
      <DataCard name="will be passed" />
    </>
  );
};

export default List3;
