import React, { useContext } from 'react';
import DataCardLink from '../components/DataCardLink/DataCardLink';
import { List1Context } from '../utils/context/List1Context';

const List1 = (props) => {
  const [list1, setList1] = useContext(List1Context);
  return (
    <>
      <div className="App">
        <h1> List by ID 1</h1>
      </div>
      <div className="d-f flw-w">
        {list1.map((list) => (
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

export default List1;
