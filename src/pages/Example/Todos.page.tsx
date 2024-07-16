import { useTodos } from '@/services/exampleServices/todoServices/api/queries'
import {
  useCreateTodo,
  useDeleteTodo,
} from '@/services/exampleServices/todoServices/api/mutations'
import { useNavigate } from 'react-router-dom'

const TodosPage = () => {
  const { data: todos } = useTodos({})
  const {
    mutate: createTodo,
    isSuccess: isSuccessCreate,
    isPending: isPendingCreate,
  } = useCreateTodo()
  const { mutate: deleteTodo } = useDeleteTodo()
  const navigate = useNavigate()

  const handleCreateTodo = () => {
    createTodo({
      title: 'test',
      completed: false,
      userId: 2,
    })
  }

  const handleDeleteTodo = (todoId: number) => {
    deleteTodo(todoId)
  }

  return (
    <div className="border-2">
      <h1 className="text-center text-3xl py-2 text-red-600">Todos</h1>

      <div className="flex items-center">
        <button
          onClick={handleCreateTodo}
          className="border-2 rounded-md p-2 m-4"
        >
          Create Todo
        </button>
        {isSuccessCreate && (
          <h1 className="text-green-700 text-1xl">Success</h1>
        )}
        {isPendingCreate && (
          <h1 className="text-green-700 text-1xl">Loading...</h1>
        )}
      </div>

      <div className="px-4 flex flex-col gap-3">
        {todos?.map((todo) => (
          <div
            onClick={() => navigate(`${todo.id}`)}
            className="border-2 p-2 cursor-pointer group/todo min-h-[110px]"
            key={todo.id}
          >
            <h1>{todo.title}</h1>
            <p>{todo.id}</p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleDeleteTodo(todo.id)
              }}
              className="border-2 rounded-md p-1 hidden group-hover/todo:block"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodosPage
