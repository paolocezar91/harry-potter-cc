import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import CharacterList from './pages/CharacterList.tsx';
import StudentsList from './pages/StudentsList.tsx';
import StaffList from './pages/StaffList.tsx';
import CharacterDetail from './pages/CharacterDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'characters',
        element: <CharacterList />,
      },
      {
        path: 'characters/:id',
        element: <CharacterDetail />,
      },
      {
        path: 'students',
        element: <StudentsList />,
      },
      {
        path: 'staff',
        element: <StaffList />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
