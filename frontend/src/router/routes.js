
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'video', component: () => import('pages/VideoConversation.page.vue') },
      { path: 'permission', component: () => import('pages/Permission.page.vue') }
    ]
  },

  {
    path: '/leaflet',
    component: () => import('components/LeafletBackground/Leaflet.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
