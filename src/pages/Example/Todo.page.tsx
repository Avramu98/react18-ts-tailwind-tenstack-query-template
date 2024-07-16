import { useParams } from 'react-router-dom'
import { useSingleTodo } from '@/services/exampleServices/todoServices/api/queries'

const TodoPage = () => {
  const { todoId } = useParams()

  const { data: todo } = useSingleTodo({
    enabled: !!todoId,
    todoId: Number(todoId) ?? 0,
  })

  if (!todo) return 'Loading'

  return (
    <div>
      <h1>{todo?.title}</h1>
    </div>
  )
}

export default TodoPage
