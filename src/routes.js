import App from './App.vue';

//global
import Login from './components/auth/Login.vue';

//admin
import Admin from './components/dashboard/admin/Admin.vue';
import AdminDashboard from './components/dashboard/admin/Dashboard.vue';

//mitra
import Mitra from './components/dashboard/mitra/Mitra.vue';
import MitraDashboard from './components/dashboard/mitra/Dashboard.vue';

//agent
import Agent from './components/dashboard/agent/Agent.vue';
import AgentDashboard from './components/dashboard/agent/Dashboard.vue';

//sub agent 
import SubAgent from './components/dashboard/subagent/SubAgent.vue';
import SubAgentDashboard from './components/dashboard/subagent/Dashboard.vue';

export const myRoutes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: 'login',
                component: Login
            },
            //admin
            {
                path: 'admin',
                component: Admin,
                meta: {
                    requiresAuth: true,
                    permission: 1
                },
                children: [
                    {
                        path: 'dashboard',
                        component: AdminDashboard,
                    }
                ]
            },
            //mitra
            {
                path: 'mitra',
                component: Mitra,
                children: [
                    {
                        path: 'dashboard',
                        component: MitraDashboard,
                    }
                ]
            },
            //agent
            {
                path: 'agent',
                component: Agent,
                children: [
                    {
                        path: 'dashboard',
                        component: AgentDashboard,
                    },
                ]
            },
            //subagent
            {
                path: 'subagent',
                component: SubAgent,
                children: [
                    {
                        path: 'dashboard',
                        component: SubAgentDashboard,
                    },
                ]
            }
        ],
    },
];