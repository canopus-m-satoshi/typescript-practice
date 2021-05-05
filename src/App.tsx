import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

type TodoTyoe = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoTyoe>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoTyoe>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>

      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
}
