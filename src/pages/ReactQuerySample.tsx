import fetchTodos from "api/api";
import React from "react";
import { useQuery } from "react-query";
import type { Todos } from "types/todo.type";

export default function ReactQuerySample() {
  const { isLoading, data } = useQuery<Todos[]>("todos", fetchTodos);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Todos</h1>
      {data && (
        <ul>
          {data.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
