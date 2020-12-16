import React, { useContext } from 'react';
import { List1Context } from '../utils/context/List1Context';
import { List2Context } from '../utils/context/List2Context';
import { List3Context } from '../utils/context/List3Context';
import { List4Context } from '../utils/context/List4Context';
import DataTable from '../components/DataTable/DataTable';
import Li from '../components/List';
const Home = (props) => {
  const [list1, setList1] = useContext(List1Context);
  const [list2, setList2] = useContext(List2Context);
  const [list3, setList3] = useContext(List3Context);
  const [list4, setList4] = useContext(List4Context);

  function createList1() {
    return (
      <DataTable title="List ID 1">
        {list1.map((list) => (
          <>
            {list.name === null || list.name === '' ? null : (
              <Li name={list.name} key={list.id} />
            )}
          </>
        ))}
      </DataTable>
    );
  }

  function createList2() {
    return (
      <DataTable title="List ID 2">
        {list2.map((list) => (
          <>
            {list.name === null || list.name === '' ? null : (
              <Li name={list.name} key={list.id} />
            )}
          </>
        ))}
      </DataTable>
    );
  }

  function createList3() {
    return (
      <DataTable title="List ID 3">
        {list3.map((list) => (
          <>
            {list.name === null || list.name === '' ? null : (
              <Li name={list.name} key={list.id} />
            )}
          </>
        ))}
      </DataTable>
    );
  }

  function createList4() {
    return (
      <DataTable title="List ID 4">
        {list4.map((list) => (
          <>
            {list.name === null || list.name === '' ? null : (
              <Li name={list.name} key={list.id} />
            )}
          </>
        ))}
      </DataTable>
    );
  }

  return (
    <>
      <div className="App">
        <h1> Welcome Home</h1>
      </div>
      <div className="d-f">
        <div>{list1 ? <> {createList1()}</> : null}</div>
        <div>{list2 ? <> {createList2()}</> : null}</div>
        <div>{list3 ? <> {createList3()}</> : null}</div>
        <div>{list4 ? <> {createList4()}</> : null}</div>
      </div>
    </>
  );
};

export default Home;
