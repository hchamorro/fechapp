import React, { createContext, useState } from 'react';

export const List4Context = createContext();

export const List4Provider = (props) => {
  const [list4, setList4] = useState([
    {
      id: 4203,
      listId: 4,
      name: '',
    },
    {
      id: 4276,
      listId: 4,
      name: 'Item 4906',
    },
    {
      id: 424,
      listId: 4,
      name: null,
    },
  ]);

  return (
    <List4Context.Provider value={[list4, setList4]}>
      {props.children}
    </List4Context.Provider>
  );
};
