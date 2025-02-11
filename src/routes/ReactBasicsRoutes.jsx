import React from "react";
import { Route } from "react-router-dom";
import { RouteList } from '../utils/consts/ConstReactBasic';

const ReactBasicsRoutes = (
    <>
        {RouteList.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
        ))}
    </>
);

export default ReactBasicsRoutes;