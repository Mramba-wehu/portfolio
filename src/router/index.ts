import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    children: [
      {
        path: 'attendance',
        name: 'AttendanceManagement',
        component: () => import('../views/Attendance.vue'),
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('../views/Portfolio.vue'),
      },
      {
        path: 'fitness',
        name: 'FitnessManagement',
        component: () => import('../views/Fitness.vue'),
      },
      {
        path: 'financial-literacy',
        name: 'FinancialLiteracy',
        component: () => import('../views/FinancialLiteracy.vue'),
      },
    ],
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue'),
    children: [
      {
        path: 'modelling',
        name: 'skillModelling',
        component: () => import('../views/Modelling.vue'),
      },
      {
        path: 'graphic-design',
        name: 'skillGraphicDesign',
        component: () => import('../views/GraphicDesign.vue'),
      },
      {
        path: 'hardware-maintenance',
        name: 'skillHardwareMaintenance',
        component: () => import('../views/HardwareMaintenance.vue'),
      }
    ]
  },
  {
    path: '/skills/modelling',
    name: 'Modelling',
    component: () => import('../views/Modelling.vue'),
  },
  {
    path: '/skills/graphic-design',
    name: 'GraphicDesign',
    component: () => import('../views/GraphicDesign.vue'),
  },
  {
    path: '/skills/hardware-maintenance',
    name: 'HardwareMaintenance',
    component: () => import('../views/HardwareMaintenance.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;