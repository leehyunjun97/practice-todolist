import { useContext, useState } from 'react';
import { ListDispatch } from './App';

const ListItem = ({ author, content, id }) => {
  const [editTo, setEditTo] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const { onRemove, onEdit } = useContext(ListDispatch);

  const handleEditTo = () => {
    setEditTo(!editTo);
    console.log('뭐 안바뀌노', editTo);
  };

  return (
    <div className='ListItem'>
      <span>작성자 : {author}</span>
      <div className='content'>
        {editTo ? (
          <>
            <textarea
              value={newContent}
              onChange={(e) => {
                setNewContent(e.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {editTo ? (
        <>
          <button
            onClick={() => {
              onEdit(id, newContent);
              handleEditTo();
            }}
          >
            수정완료
          </button>
          <button
            onClick={() => {
              handleEditTo();
            }}
          >
            수정취소
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              onRemove(id);
            }}
          >
            삭제하기
          </button>
          <button
            onClick={() => {
              handleEditTo();
            }}
          >
            수정하기
          </button>
        </>
      )}
    </div>
  );
};

export default ListItem;
