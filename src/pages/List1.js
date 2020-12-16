import React, { useContext } from 'react';
import DataCard from '../components/DataCard/DataCard';
import { List1Context } from '../utils/context/List1Context';

const List1 = (props) => {
  const [list1, setList1] = useContext(List1Context);
  return (
    <>
      {console.log(list1)}
      <div className="App">
        <h1> List by ID 1</h1>
      </div>
      <div className="d-f flw-w">
        {list1.map((list) => (
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

export default List1;
