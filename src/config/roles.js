const components = {
    home: {
      component: 'Home',
      url: '/home',
    },
    payment: {
      component: 'Payment',
      url: '/payment',
    },
    shopdetails: {
      component: 'ShopDetails',
      url: '/shopdetails',
    },
    shoppackages: {
      component: 'ShopPackages',
      url: '/shoppackages',
    },
    shopprofile: {
      component: 'ShopProfile',
      url: '/shopprofile',
    },
    signup: {
      component: 'Signup',
      url: '/signup',
    },
    userprofile: {
      component: 'UserProfile',
      url: '/userprofile',
    },
    resetpassword: {
      component: 'ResetPassword',
      url: '/resetpassword/:token',
    },
    contactus: {
      component: 'ContactUs',
      url: '/contactus',
    },
    admin: {
      component: 'Admin',
      url: '/admin',
    },
  };
  
  export default {
    admin: {
      routes: [
        components.home,
        components.admin,
        components.shopdetails,
        components.shoppackages,
        components.contactus
      ],
      redirect:'/home'
    },
    buyer: {
        routes: [
            components.home,
            components.payment,
            components.shoppackages,
            components.shopdetails,
            components.userprofile,
            components.resetpassword,
            components.contactus
        ],
        redirect:'/home'
    },
    seller: {
      routes: [
            components.home,
            components.payment,
            components.shoppackages,
            components.shopdetails,
            components.shopprofile,
            components.userprofile,
            components.resetpassword,
            components.contactus
      ],
      redirect:'/home'
    },
    guest: {
      routes: [
            components.home,
            components.signup,
            components.shoppackages,
            components.shopdetails,
            components.contactus,
            components.resetpassword
      ],
      redirect:'/home'
    }
  }