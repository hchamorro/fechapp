import React, { createContext, useState } from 'react';

export const List4Context = createContext();

export const List4Provider = (props) => {
  const [list4, setList4] = useState();

  return (
    <List4Context.Provider value={[list4, setList4]}>
      {props.children}
    </List4Context.Provider>
  );
};
