import React, { useContext } from 'react';
import DataCardLink from '../components/DataCardLink/DataCardLink';
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
          <div key={list.id}>
            {list.name === null || list.name === '' ? null : (
              <DataCardLink name={list.name} id={list.id} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default List2;
