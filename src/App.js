import React, { useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import List1 from './pages/List1';
import List2 from './pages/List2';
import List3 from './pages/List3';
import List4 from './pages/List4';
import { FetchDataContext } from './utils/context/fetchDataContext';
import { List1Context } from './utils/context/List1Context';
import { List2Context } from './utils/context/List2Context';
import { List3Context } from './utils/context/List3Context';
import { List4Context } from './utils/context/List4Context';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [fetchData, setFetchData] = useContext(FetchDataContext);
  const [list1, setList1] = useContext(List1Context);
  const [list2, setList2] = useContext(List2Context);
  const [list3, setList3] = useContext(List3Context);
  const [list4, setList4] = useContext(List4Context);

  useEffect(() => {
    getFetchData();
    //assignListId(fetchData);
  }, []);

  async function getFetchData() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json`
    ).then((res) => {
      setFetchData(res.data);
      assignListId(res.data);
    });
  }

  async function assignListId(value) {
    const listId1 = [];
    const listId2 = [];
    const listId3 = [];
    const listId4 = [];
    if (fetchData) {
      value.filter((data) => {
        switch (data.listId) {
          case 1:
            listId1.push(data);
            break;
          case 2:
            listId2.push(data);
            break;
          case 3:
            listId3.push(data);
            break;
          case 4:
            listId4.push(data);
            break;
        }
      });
      setList1(listId1);
      setList2(listId2);
      setList3(listId3);
      setList4(listId4);
    }
  }

  return (
    <>
      <>
        <NavBar />
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path={'/list1'} component={List1} />
        <Route exact path={'/list2'} component={List2} />
        <Route exact path={'/list3'} component={List3} />
        <Route exact path={'/list4'} component={List4} />
      </>
    </>
  );
}

export default App;
