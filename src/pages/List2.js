import React, { useContext } from 'react';
import DataCard from '../components/DataCard/DataCard';
import { List2Context } from '../utils/context/List2Context';

const List2 = (props) => {
  const [list2, setList2] = useContext(List2Context);
  return (
    <>
      <div className="App">
        <h1> List by ID 2</h1>
      </div>
      <div className="d-f flw-w">
        {list2.map((list) => (
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

export default List2;
