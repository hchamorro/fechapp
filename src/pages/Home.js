import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';

const Home = (props) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    getFetchData();
  }, []);

  function getFetchData() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json`
    ).then((res) => console.log(res));
  }
  return <>hello home</>;
};

export default Home;
