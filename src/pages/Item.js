import React from 'react';
import { useParams } from 'react-router-dom';
import DataCard from '../components/DataCard/DataCard';

function ItemPage(props) {
  const { id } = useParams(props);

  return (
    <>
      <div className="App">
        <h1> Hey you picked this Item!</h1>
        <DataCard name={`Item ${id}`} />
      </div>
    </>
  );
}

export default ItemPage;
