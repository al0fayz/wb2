import App from './App.vue';
//admin
import Admin from './components/dashboard/admin/Admin.vue';

export const myRoutes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: 'admin',
                component: Admin,
            },
        ],
    },
];