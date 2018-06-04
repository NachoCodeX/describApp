
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
      },
      {
        path:'info/:_id',
        component:()=>import('pages/Info'),
        meta:{requiresAuth:true}
      },
      {
        path:'/notifications',
        component:()=> import('pages/Notifications'),
        meta:{requiresAuth:true}
      },
      {
        path:'users',
        component:()=>import('pages/ListUsers'),
        meta:{requiresAuth:true}
      },
      {
        path:'contacts',
        component:()=>import('pages/ContactList'),
        meta:{requiresAuth:true}
      }
    ] 
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
