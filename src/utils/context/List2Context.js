import React, { createContext, useState } from 'react';

export const List2Context = createContext();

export const List2Provider = (props) => {
  const [list2, setList2] = useState([]);

  return (
    <List2Context.Provider value={[list2, setList2]}>
      {props.children}
    </List2Context.Provider>
  );
};
