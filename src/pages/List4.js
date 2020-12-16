import React, { useContext } from 'react';
import DataCard from '../components/DataCard/DataCard';
import { List4Context } from '../utils/context/List4Context';

const List4 = (props) => {
  const [list4, setList4] = useContext(List4Context);
  return (
    <>
      <div className="App">
        <h1> List by ID 4</h1>
      </div>
      <div className="d-f flw-w">
        {list4.map((list) => (
          <>
            {list.name === null || list.name === '' ? null : (
              <DataCard name={list.name} key={list.id} />
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default List4;
