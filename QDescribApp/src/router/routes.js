
export default [
  {
    path: '/',
    component: () => import('layouts/Index'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index'),
        meta:{requiresAuth:false}
      }
    ]
  },

  {
    path:'/dashboard',
    component:()=> import('layouts/default'),
    children:[
      { path:'',
        component:()=>import('pages/Dashboard'),
        meta:{requiresAuth:true}
      }
    ] 
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
