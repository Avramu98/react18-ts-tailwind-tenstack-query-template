import { z } from 'zod'

export const TodoEntitySchema = z.object({
  userId: z.number(),
  completed: z.boolean(),
  title: z.string(),
  id: z.number(),
})

export const TodosEntitySchema = z.array(TodoEntitySchema)
