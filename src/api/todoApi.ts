import axios from "axios";

type Todo = {
  title: string;
  description: string;
};

const BASE_URL = "http://localhost:3000";

const createTodo = async (todo: Todo): Promise<any> => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create todo:", error);
    throw error;
  }
};

export default createTodo;
