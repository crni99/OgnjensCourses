import React from "react";
import { Route } from "react-router-dom";
import { RouteList } from '../utils/consts/ConstSQLBasic';

const SQLBasicsRoutes = (
    <>
        {RouteList.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
        ))}
    </>
);

export default SQLBasicsRoutes;