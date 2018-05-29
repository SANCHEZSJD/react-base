import asyncComponent from '../asyncComponent.jsx'

const Dashboard = asyncComponent(() =>
    import('../layouts/Dashboard/Dashboard').then(module => module.default)
)
const Login = asyncComponent(() =>
    import('../layouts/Login/Login').then(module => module.default)
)


const indexRoutes = [
    { path: "/app", component: Dashboard },
    { path: "/login", component: Login },
    { path: "**", component: Login },
];

export default indexRoutes;