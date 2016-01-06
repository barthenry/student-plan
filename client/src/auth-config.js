const configForDevelopment = {
  httpInterceptor: true,
  loginOnSignup: true,
  baseUrl: '/',
  loginRedirect: false,
  logoutRedirect: false,
  signupRedirect: false,
  loginUrl: '/auth/login',
  signupUrl: '/auth/signup',
  // profileUrl: '/auth/me',
  loginRoute: '/login',
  signupRoute: '/signup',
  tokenRoot: false,
  tokenName: 'token',
  tokenPrefix: 'aurelia',
  responseTokenProp: 'access_token',
  unlinkUrl: '/auth/unlink/',
  unlinkMethod: 'get',
  authHeader: 'Authorization',
  authToken: 'Bearer',
  withCredentials: true,
  platform: 'browser',
  storage: 'localStorage',
  providers: {
    google: {
      clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com'
    },

    linkedin: {
      clientId: '778mif8zyqbei7'
    },

    facebook: {
      clientId: '1452782111708498'
    }
  }
};

const configForProduction = {
  providers: {
    google: {
      clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
    },
    linkedin: {
      clientId: '7561959vdub4x1'
    },
    facebook: {
      clientId: '1653908914832509'
    }
  }
};

const config = (() => {
  if (window.location.hostname === 'localhost') {
    return configForDevelopment;
  }

  return configForProduction;
})();


export default config;
