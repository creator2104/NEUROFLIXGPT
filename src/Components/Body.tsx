import Login from './Login';
import Browse from './Browse';
import MyList from './MyList';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shows from './Shows';
import Movies from './Movies';
import Games from './Games';
import NewPopular from './NewPopular';
import BrowseByLanguages from './BrowseByLanguages';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      element: <Layout />, 
      children: [
        {
          path: '/browse',
          element: <Browse />
        },
        {
          path:'/home',
          element: <Browse />
        },
        {
          path:'/shows',
          element: <Shows />
        },
        {
          path:'/movies',
          element: <Movies />
        },
        {
          path:'/games',
          element: <Games />
        },
        {
          path:'/newpopular',
          element: <NewPopular />
        },
        {
          path:'/browselanguages',
          element: <BrowseByLanguages />
        },
        {
          path: '/mylist',
          element: <MyList />
        }
      ]
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
