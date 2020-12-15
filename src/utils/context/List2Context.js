import React, { createContext, useState } from 'react';

export const List2Context = createContext();

export const List2Provider = (props) => {
  const [list2, setList2] = useState([
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
  ]);

  return (
    <List2Context.Provider value={[list2, setList2]}>
      {props.children}
    </List2Context.Provider>
  );
};
