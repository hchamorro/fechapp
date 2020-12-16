import React, { createContext, useState } from 'react';

export const FetchDataContext = createContext();

export const FetchDataProvider = (props) => {
  const [fetchData, setFetchData] = useState();

  return (
    <FetchDataContext.Provider value={[fetchData, setFetchData]}>
      {props.children}
    </FetchDataContext.Provider>
  );
};
