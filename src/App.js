import React, { useState } from 'react';
import './App.css';
import List from './List';

export const ListStateContext = React.createContext();
export const ListDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    name: '이현준',
    content: '안asdasd녕하세요',
  },
  {
    id: 2,
    name: '박현준',
    content: '안녕하aaa세요',
  },
  {
    id: 3,
    name: '최현준',
    content: '안녕하aa세요',
  },
];

function App() {
  const [data, setData] = useState(dummyData);

  return (
    <ListStateContext.Provider value={data}>
      <div className='App'>
        <List />
      </div>
    </ListStateContext.Provider>
  );
}

export default App;
