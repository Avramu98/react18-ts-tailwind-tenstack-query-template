import { mergeQueryKeys } from '@lukemorales/query-key-factory'
import { todoKeys } from '@/services/exampleServices/todoServices/constants/queryKeys'

export const appQueryKeys = mergeQueryKeys(todoKeys)
