import './App.css'
import { useState } from 'react';

type Todo = {
  value: string;
};

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value="" onChange={(e) => e.preventDefault}/>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />'
      </form>
    </div>
  );
};