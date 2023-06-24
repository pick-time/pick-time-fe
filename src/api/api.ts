import axios from "axios";
import type { Todos } from "types/todo.type";

// API 호출 함수
async function fetchTodos(): Promise<Todos[]> {
  const response = await axios.get<Todos[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return response.data;
}

export default fetchTodos;
