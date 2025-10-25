import { type RouteObject, Navigate } from 'react-router-dom';
import { ErrorBoundaryLayout } from './ErrorBoundary';

export const createRoutesWithDefault: (
  routes: RouteObject[],
) => RouteObject[] = (routes) => [
 {
    element: <ErrorBoundaryLayout />,  // wraps all routes with ErrorBoundary
    children: [
      ...routes,
      { path: '*', element: <Navigate to={'/'} /> }
    ],
  },
];
