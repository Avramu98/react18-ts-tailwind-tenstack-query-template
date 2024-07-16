import loadable from '@loadable/component'
import { RouteType } from '@/lib/react-router/types'

const LazyLoadedTodosPage = loadable(
  () => import('@/pages/Example/Todos.page'),
  {
    fallback: <h1>Loading...</h1>,
  }
)

const LazyLoadedTodoPage = loadable(() => import('@/pages/Example/Todo.page'), {
  fallback: <h1>Loading...</h1>,
})

const exampleRoutes: RouteType[] = [
  {
    path: 'todos',
    children: [
      {
        index: true,
        element: <LazyLoadedTodosPage />,
      },
      {
        path: ':todoId',
        element: <LazyLoadedTodoPage />,
      },
    ],
  },
]

export default exampleRoutes
