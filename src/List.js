import { useContext } from 'react';
import { ListStateContext } from './App';
import ListItem from './ListItem';

const List = () => {
  const list = useContext(ListStateContext);
  // console.log(list);
  list.map((it) => {
    console.log(it);
  });
  return (
    <div className='List'>
      <h2>TODO LIST</h2>
      <div>
        {list.map((it) => (
          <ListItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

List.defualtProps = {
  list: [],
};

export default List;
