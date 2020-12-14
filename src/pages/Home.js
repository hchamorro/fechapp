import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';

const Home = (props) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    getFetchData();
  }, []);

  async function getFetchData() {
    try {
      const res = await Axios.get(
        `https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json`
      );
      setFetchData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return <>hello home</>;
};

export default Home;
