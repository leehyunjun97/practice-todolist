import { useContext } from 'react';
import ListItem from './ListItem';
import { ListStateContext } from './App';

const List = () => {
  const list = useContext(ListStateContext);

  return (
    <div className='List'>
      <h3>게시판</h3>
      <h4>{list.length}개의 게시글이 있습니다.</h4>
      <div>
        {list.map((it) => (
          <ListItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default List;
