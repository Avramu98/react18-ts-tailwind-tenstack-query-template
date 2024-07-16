import { QueryOpts } from '@/services/types'
import { z } from 'zod'
import { TodoEntitySchema } from '@/services/exampleServices/todoServices/validation'

export type TodoModel = z.infer<typeof TodoEntitySchema>

export type UseTodosOpts = QueryOpts

export type UseSingleTodoOpts = QueryOpts & {
  todoId: number
}

export type UseCreateJsonPlaceholderTodoArgs = {
  title: string
  userId: number
  completed: boolean
}
