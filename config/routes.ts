export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './user/login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/chart/add',
    name: '智能分析',
    icon: 'barChart',
    component: './chart/add',
  },
  {
    path: '/chart/history',
    name: '历史记录',
    icon: 'clockCircle',
    component: './chart/history',
  },

  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: '管理页', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  // { name: '查询表格', icon: 'table', path: '/list', component: './table-list' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
