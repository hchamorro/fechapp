import React from 'react';
import { List1Provider } from './List1Context';
import { List2Provider } from './List2Context';
import { List3Provider } from './List3Context';
import { Listd4Provider } from './List4Context';

const MasterProvider = (props) => {
  return (
    <>
      <List1Provider>
        <List2Provider>
          <List3Provider>
            <Listd4Provider>{props.children}</Listd4Provider>
          </List3Provider>
        </List2Provider>
      </List1Provider>
    </>
  );
};

export default MasterProvider;
