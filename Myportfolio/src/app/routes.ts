import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Education } from './pages/Education';
import { Experience } from './pages/Experience';
import { Leadership } from './pages/Leadership';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Chat } from './pages/Chat';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: 'education', Component: Education },
        { path: 'experience', Component: Experience },
        { path: 'leadership', Component: Leadership },
        { path: 'skills', Component: Skills },
        { path: 'projects', Component: Projects },
        { path: 'contact', Component: Contact },
        { path: 'chat', Component: Chat },
        { path: '*', Component: NotFound },
      ],
    },
  ],
  { basename: '/Myportfolio' }
);