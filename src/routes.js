import MembersPage from './pages/MembersPage';
import TeamDetailsPage from './pages/TeamDetailsPage';
import TeamsPage from './pages/TeamsPage';
import TodoPage from './pages/TodoPage';

export const routes = [
  { path: '/', element: <MembersPage/>, key: 1 },
  { path: '/teams', element: <TeamsPage/>,key: 2 },
  { path: '/todo', element: <TodoPage/>, key: 3 },
  { path: '/team/:id', element: <TeamDetailsPage/>,key: 4 },
]
