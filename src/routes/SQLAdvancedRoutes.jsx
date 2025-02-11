import React from "react";
import { Route } from "react-router-dom";
import { RouteList } from '../utils/consts/ConstSQLAdvanced';

const SQLAdvancedRoutes = (
    <>
        {RouteList.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
        ))}
    </>
);

export default SQLAdvancedRoutes;