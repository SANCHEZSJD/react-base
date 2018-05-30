import asyncComponent from '../asyncComponent.jsx'

const viewExample = asyncComponent(() =>
    import('../views/viewExample').then(module => module.default)
)

const dashboardRoutes = [
    {
        path: "/app/view-example",
        sidebarName: 'View example',
        component: viewExample
    },
    { redirect: true, path: "/", to: "/app", navbarName: "Redirect" }
];

export default dashboardRoutes;