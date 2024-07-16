import {
  UseSingleTodoOpts,
  UseTodosOpts,
} from '@/services/exampleServices/todoServices/types'
import { useQuery } from '@tanstack/react-query'
import { appQueryKeys } from '@/services/appQueryKeys'
import {
  getJsonPlaceholderTodoById,
  getJsonPlaceholderTodos,
} from '@/services/exampleServices/todoServices/api/api'
import {
  TodoEntitySchema,
  TodosEntitySchema,
} from '@/services/exampleServices/todoServices/validation'

export const useTodos = (opts: UseTodosOpts) => {
  const { enabled = true } = opts

  return useQuery({
    ...appQueryKeys.todos.all,
    queryFn: async () => {
      const response = await getJsonPlaceholderTodos()
      return TodosEntitySchema.parse(response.data)
    },
    enabled,
  })
}

export const useSingleTodo = (opts: UseSingleTodoOpts) => {
  const { todoId, enabled } = opts

  return useQuery({
    ...appQueryKeys.todos.detail(todoId),
    queryFn: async () => {
      const response = await getJsonPlaceholderTodoById(todoId)
      return TodoEntitySchema.parse(response.data)
    },
    enabled,
  })
}
