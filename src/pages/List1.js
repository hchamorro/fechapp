import React, { useEffect, useState } from 'react';
import DataCard from '../components/DataCard/DataCard';

const List1 = (props) => {
  return (
    <>
      <div className="App">
        <h1> List by ID 1</h1>
      </div>
      <DataCard name="will be passed" />
    </>
  );
};

export default List1;
