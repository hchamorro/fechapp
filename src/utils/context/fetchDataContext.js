import React, { createContext, useState } from 'react';

export const FetchDataContext = createContext();

export const FetchDataProvider = (props) => {
  const [fetchData, setFetchData] = useState([
    {
      id: 684,
      listId: 1,
      name: 'Item 684',
    },
    {
      id: 276,
      listId: 1,
      name: 'Item 276',
    },
    {
      id: 599,
      listId: 1,
      name: null,
    },
    {
      id: 444,
      listId: 1,
      name: '',
    },
    {
      id: 203,
      listId: 2,
      name: '',
    },
    {
      id: 276,
      listId: 2,
      name: 'Item 906',
    },
    {
      id: 424,
      listId: 2,
      name: null,
    },
    {
      id: 3203,
      listId: 3,
      name: '',
    },
    {
      id: 3276,
      listId: 3,
      name: 'Item 3906',
    },
    {
      id: 4424,
      listId: 3,
      name: null,
    },
    {
      id: 3276,
      listId: 4,
      name: 'Item 4906',
    },
    {
      id: 4424,
      listId: 4,
      name: null,
    },
  ]);

  return (
    <FetchDataContext.Provider value={[fetchData, setFetchData]}>
      {props.children}
    </FetchDataContext.Provider>
  );
};
