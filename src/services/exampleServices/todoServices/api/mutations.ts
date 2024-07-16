import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  TodoModel,
  UseCreateJsonPlaceholderTodoArgs,
} from '@/services/exampleServices/todoServices/types'
import {
  createJsonPlaceholderTodo,
  deleteJsonPlaceholderTodo,
} from '@/services/exampleServices/todoServices/api/api'
import { TodoEntitySchema } from '@/services/exampleServices/todoServices/validation'
import { appQueryKeys } from '@/services/appQueryKeys'

export const useCreateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (args: UseCreateJsonPlaceholderTodoArgs) => {
      const response = await createJsonPlaceholderTodo(args)
      return TodoEntitySchema.parse(response.data)
    },
    onSuccess: (newTodo: TodoModel) => {
      queryClient.setQueryData(
        appQueryKeys.todos.all.queryKey,
        (oldTodos: TodoModel[] | undefined) => {
          if (oldTodos) {
            return [...oldTodos, newTodo] // Append newTodo to the existing array
          } else {
            return [newTodo] // In case oldTodos is undefined, return an array with newTodo
          }
        }
      )
    },
  })
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (todoId: number) => {
      const response = await deleteJsonPlaceholderTodo(todoId)
      return response.data
    },
    onSuccess: (deletedTodo, todoId, context) => {
      queryClient.setQueryData(
        appQueryKeys.todos.all.queryKey,
        (oldTodos: TodoModel[]) => {
          return oldTodos.filter((todo) => todo.id !== todoId)
        }
      )
    },
  })
}
