import React, { createContext, useState } from 'react';

export const List3Context = createContext();

export const List3Provider = (props) => {
  const [list3, setList3] = useState([
    {
      id: 3203,
      listId: 3,
      name: '',
    },
    {
      id: 3276,
      listId: 3,
      name: 'Item 906',
    },
    {
      id: 3424,
      listId: 3,
      name: null,
    },
  ]);

  return (
    <List3Context.Provider value={[list3, setList3]}>
      {props.children}
    </List3Context.Provider>
  );
};
