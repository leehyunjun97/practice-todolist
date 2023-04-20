import React, { useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import ListEditor from './ListEditor';
import List from './List';
const dummyList = [
  {
    id: 1,
    author: '이현준',
    content: '안녕하세요',
  },
  {
    id: 2,
    author: '이현준',
    content: '안녕하세요',
  },
  {
    id: 3,
    author: '이현준',
    content: '안녕하세요',
  },
];

export const ListStateContext = React.createContext();
export const ListDispatch = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];

    case 'REMOVE':
      return state.filter((it) => it.id !== action.targetId);

    case 'EDIT':
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );

    default:
      break;
  }
};

function App() {
  // const [data, setData] = useState(dummyList);

  const [data, dispatch] = useReducer(reducer, dummyList);

  const dataId = useRef(4);

  const onCreate = (author, content) => {
    dispatch({ type: 'CREATE', data: { author, content, id: dataId.current } });
    // const newItem = {
    //   id: dataId.current,
    //   author,
    //   content,
    // };
    dataId.current += 1;
    // setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(targetId);
    dispatch({ type: 'REMOVE', targetId });
    // setData(data.filter((it) => targetId !== it.id));
    alert(`${targetId}번째 리스트가 삭제되었습니다.!`);
  };

  const onEdit = (targetId, newContent) => {
    // setData(
    //   data.map((it) =>
    //     it.id === targetId ? { ...it, content: newContent } : it
    //   )
    // );
    dispatch({ type: 'EDIT', targetId, newContent });
    alert(`수정완료!`);
  };

  const memoized = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  });

  return (
    <div className='App'>
      <ListStateContext.Provider value={data}>
        <ListDispatch.Provider value={memoized}>
          {/* <h2>TODO LIST</h2> */}
          <List list />
          <ListEditor />
        </ListDispatch.Provider>
      </ListStateContext.Provider>
    </div>
  );
}

export default App;
