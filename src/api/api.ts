import axios from "axios";
import type { Todos } from "types/todo.type";

export default async function fetchTodos(): Promise<Todos[]> {
  const response = await axios.get<Todos[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return response.data;
}

export async function postScrapeMetaData(url: string) {
  const res = await axios({
    url: "http://localhost:5000/scrape",
    method: "post",
    data: {
      url,
    },
  });
  if (res.statusText === "OK") {
    return res.data;
  }
  throw new Error(res.statusText);
}
