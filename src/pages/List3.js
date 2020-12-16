import React, { useContext } from 'react';
import DataCardLink from '../components/DataCardLink/DataCardLink';
import { List3Context } from '../utils/context/List3Context';

const List3 = (props) => {
  const [list3, setList3] = useContext(List3Context);
  return (
    <>
      <div className="App">
        <h1> List by ID 3</h1>
      </div>
      <div className="d-f flw-w">
        {list3.map((list) => (
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

export default List3;
