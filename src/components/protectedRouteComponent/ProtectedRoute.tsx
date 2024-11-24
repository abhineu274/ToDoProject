import * as React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

export interface IProtectedRouteProps {
    isAuthenticated : boolean,
    children ?: JSX.Element,
}

export function ProtectedRoute ({isAuthenticated, children}: IProtectedRouteProps) {
    const redirect = "/login"

    if(!isAuthenticated)
    {
        return <Navigate to={redirect} />
    }

  return children ? children : <Outlet />
}
