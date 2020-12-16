import React, { createContext, useState } from 'react';

export const List3Context = createContext();

export const List3Provider = (props) => {
  const [list3, setList3] = useState();

  return (
    <List3Context.Provider value={[list3, setList3]}>
      {props.children}
    </List3Context.Provider>
  );
};
