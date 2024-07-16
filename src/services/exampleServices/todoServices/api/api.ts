import axios from 'axios'
import { UseCreateJsonPlaceholderTodoArgs } from '@/services/exampleServices/todoServices/types'

const getJsonPlaceholderTodos = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`)
}

const getJsonPlaceholderTodoById = (id: number) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

const createJsonPlaceholderTodo = (args: UseCreateJsonPlaceholderTodoArgs) => {
  return axios.post('https://jsonplaceholder.typicode.com/todos/', args)
}

const deleteJsonPlaceholderTodo = (todoId: number) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
}

export {
  getJsonPlaceholderTodos,
  getJsonPlaceholderTodoById,
  createJsonPlaceholderTodo,
  deleteJsonPlaceholderTodo,
}
