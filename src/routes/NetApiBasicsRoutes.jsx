import React from "react";
import { Route } from "react-router-dom";
import { RouteList } from '../utils/consts/ConstDotNetBasic';

const NetApiBasicsRoutes = (
    <>
        {RouteList.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
        ))}
    </>
);

export default NetApiBasicsRoutes;