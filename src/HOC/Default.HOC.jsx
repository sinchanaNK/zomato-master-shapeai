import React, { useLayoutEffect } from "react";
import {Route, route} from "react-router-dom";

//layout

import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component: Component, ...rest}) => {
    return (
        <>
        <Route
        {...rest}
        component={(props) => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )}
    
         />
        </>
        );
};


export default DefaultHOC;