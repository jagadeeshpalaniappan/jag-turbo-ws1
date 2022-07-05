import * as React from "react";

export interface Todo {
  id: string;
  name: string;
}

const TODOS_API = "http://localhost:5001/todos";

export const Todos = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  React.useEffect(() => {
    fetch(TODOS_API)
      .then((res: any) => res.json())
      .then(setTodos);
  }, []);

  return (
    <div style={{ border: "1px solid" }}>
      <h1>todos</h1>
      <p>
        This is `todos` component is from <code>ui</code>
      </p>
      {/* <p>{process.env.VITE_VERCEL_ENV}</p> */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};
