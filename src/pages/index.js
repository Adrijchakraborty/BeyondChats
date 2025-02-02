import React from "react";

const LazyMainScreen = React.lazy(()=> import ("./MainScreen"));
const LazySetupOrg = React.lazy(()=> import ("./SetupOrg"));
const LazyLogin = React.lazy(()=> import ("./Login"));
const LazyRegister = React.lazy(()=> import ("./Register"));

export {
    LazyMainScreen,
    LazyLogin,
    LazyRegister,
    LazySetupOrg
}