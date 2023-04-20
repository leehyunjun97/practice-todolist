import { useContext, useState } from 'react';
import { ListDispatch } from './App';

const ListEditor = () => {
  // const [author, setAuthor] = useState('');
  // const [content, setContent] = useState('');

  const [state, setState] = useState({
    author: '',
    content: '',
  });

  const { onCreate } = useContext(ListDispatch);

  const handleSubmit = () => {
    onCreate(state.author, state.content);
    alert('리스트 작성 완료');
  };

  return (
    <div className='ListEditor'>
      <div>
        <input
          placeholder='작성자'
          name='author'
          value={state.author}
          onChange={(e) =>
            setState({
              author: e.target.value,
              content: state.content,
            })
          }
        />
      </div>
      <div>
        <textarea
          placeholder='내용'
          name='content'
          value={state.content}
          onChange={(e) =>
            setState({
              author: state.author,
              content: e.target.value,
            })
          }
        />
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default ListEditor;
