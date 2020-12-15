import React, { createContext, useState } from 'react';

export const List1Context = createContext();

export const List1Provider = (props) => {
  const [list1, setList1] = useState([
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
  ]);

  return (
    <List1Context.Provider value={[list1, setList1]}>
      {props.children}
    </List1Context.Provider>
  );
};
