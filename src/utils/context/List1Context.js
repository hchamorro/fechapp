import React, { createContext, useState } from 'react';

export const List1Context = createContext();

export const List1Provider = (props) => {
  const [list1, setList1] = useState();

  return (
    <List1Context.Provider value={[list1, setList1]}>
      {props.children}
    </List1Context.Provider>
  );
};
