export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },   
    {
      title: true,
      name: 'Home',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
          
    {
      name: 'Newsfeed',
      url: '/newsfeed',
      icon: 'icon-puzzle',
    }, 
        {
          name: 'Rooming',
          url: '/rooming',
          icon: 'icon-puzzle',
        },
             
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
   
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },

   
  ],
};
