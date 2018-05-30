import asyncComponent from '../asyncComponent.jsx'

const viewExample = asyncComponent(() =>
    import('../views/viewExample').then(module => module.default)
)

const appRoutes = [
    { path: "/app/view-example", component: viewExample },
];

export default appRoutes;