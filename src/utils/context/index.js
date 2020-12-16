import React from 'react';
import { FetchDataProvider } from './fetchDataContext';
import { List1Provider, List1Context } from './List1Context';
import { List2Provider } from './List2Context';
import { List3Provider } from './List3Context';
import { List4Provider } from './List4Context';

const MasterProvider = (props) => {
  return (
    <>
      <FetchDataProvider>
        <List1Provider>
          <List2Provider>
            <List3Provider>
              <List4Provider>{props.children}</List4Provider>
            </List3Provider>
          </List2Provider>
        </List1Provider>
      </FetchDataProvider>
    </>
  );
};

export default MasterProvider;
