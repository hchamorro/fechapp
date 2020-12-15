import React, { createContext, useState } from 'react';

export const Listd4Context = createContext();

export const Listd4Provider = (props) => {
  const [list4, setList4] = useState([
    {
      id: 4203,
      listId: 4,
      name: '',
    },
    {
      id: 4276,
      listId: 4,
      name: 'Item 906',
    },
    {
      id: 4424,
      listId: 4,
      name: null,
    },
  ]);

  return (
    <Listd4Context.Provider value={[list4, setList4]}>
      {props.children}
    </Listd4Context.Provider>
  );
};
