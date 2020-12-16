import React, { useContext } from 'react';
import DataCardLink from '../components/DataCardLink/DataCardLink';
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

export default List4;
