import {
  type RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import {
  ErrorBoundaryLayout,
  PublicRoutes,
  createRoutesWithDefault,
} from '.';



export const Root = () => {
  let routes: RouteObject[] = PublicRoutes;

  const router = createBrowserRouter([
    {
      element: <ErrorBoundaryLayout />,
      children: createRoutesWithDefault(routes),
    },
  ]);

  return <RouterProvider router={router} />;
};
