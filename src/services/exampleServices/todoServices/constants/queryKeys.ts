import { createQueryKeys } from '@lukemorales/query-key-factory'

export const todoKeys = createQueryKeys('todos', {
  all: {
    queryKey: null,
  },
  detail: (todoId: number) => ({
    queryKey: [todoId],
  }),
})
