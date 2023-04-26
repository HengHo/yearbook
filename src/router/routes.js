const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),

  //   children: [
  //     { path: '', component: () => import('../pages/HomeMie.vue') },
  //     { path: '/directory/:year/:namemajor/:classId', component: () => import('../pages/DirectoryToProfile.vue') },
  //     { path: '/proflie/:profileId', component: () => import('../pages/ProFlie.vue') },
  //     { path: '/comfirmemail', component: () => import('../pages/ComfirmEmail.vue') },
  //     { path: '/comfirmpassword', component: () => import('../pages/ComfirmPassword.vue') },
  //     { path: '/editinfo', component: () => import('../pages/EditInfo.vue') },
  //     { path: '/proflie/:action/:profileId', component: () => import('../pages/ProFlieCreate.vue') },
  //     { path: '/comfirmpassword', component: () => import('../pages/ComfirmPassword.vue') },

  //   ],
  // },
  {
    path: "/",
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import("layouts/BunbookLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/HomeYearbook.vue") },
      { path: "/testpage", component: () => import("../pages/TestPage.vue") },
      { path: "/pv", component: () => import("../testpage/IndexPage.vue") },
      // { path: "reg", component: () => import("src/pages/SignIn1.vue") },
    ],
  },

  {
    path: "/confirm",
    meta: { requireAuth: true },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "addadmin", component: () => import("../pages/AddAdmin.vue") },
      { path: "blockuser", component: () => import("../pages/BlockUser.vue") },
      {
        path: "notification",
        component: () => import("../pages/NotificaTion.vue"),
      },
    ],
  },

  {
    path: "/blanktest",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      { path: "test", component: () => import("src/testpage/TesT.vue") },
      {
        path: "local-page",
        component: () => import("src/testpage/LocalPage.vue"),
      },
      {
        path: "student",
        component: () => import("src/testpage/StudentList.vue"),
      },
      {
        path: "student-form/:studentId",
        component: () => import("src/testpage/StudentForm.vue"),
      },
      {
        path: "list-page",
        component: () => import("src/testpage/ListTest.vue"),
      },
    ],
  },

  // {
  //   path: '/signin',
  //   component: () => import('../pages/SingIn.vue'),
  //   children: [
  //     {
  //       path: '', component: () => import('../pages/LogIn.vue'),
  //     },
  //     {
  //       path: '/signin/register', component: () => import('../pages/RegisTer.vue'),
  //     },
  //     { path: 'register',  component: () => import('../pages/RegisterUser.vue') }

  //   ],
  // },
  {
    path: "/register",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      { path: "signUp", component: () => import("pages/SignUp.vue") },
      { path: "signin", component: () => import("../pages/SignIn.vue") },
      // { path: ":action", component: () => import("pages/RegisterUser.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
