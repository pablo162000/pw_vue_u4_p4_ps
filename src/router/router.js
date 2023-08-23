import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [

    {
        path: "/",
        component: () => import('../modules/estudiante/pages/BienvenidaPage')
    },

    {
        path: "/actualizar",
        component: () => import('../modules/estudiante/pages/ActualizarEstudiante')
    },
    {
        path: "/consultar",
        component: () => import('../modules/estudiante/pages/ConsultarEstudiante')

    },
    {
        path: "/eliminar",
        component: () => import('../modules/estudiante/pages/EliminarEstudiante')

    },
    {
        path: "/guardar",
        component: () => import('../modules/estudiante/pages/GuardarEstudiante')

    }
]

const router = createRouter({

    history: createWebHashHistory(),
    routes
})

export default router 