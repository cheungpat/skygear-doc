const guideRoutes = {
  'auth': {
    'basics': {
      'js': {
        'markdown': require('./content/auth/basics-js.md')
      },
      'android': {
        'markdown': require('./content/auth/basics-android.md')
      },
      'ios': {
        'markdown': require('./content/auth/basics-ios.md')
      },
    },
    'social-login': {
      'js': {
        'markdown': require('./content/auth/social-login-js.md')
      },
      'android': {
        'markdown': require('./content/auth/social-login-android.md')
      },
      'ios': {
        'markdown': require('./content/auth/social-login-ios.md')
      },
    },
    'user-profile': {
      'js': {
        'markdown': require('./content/auth/user-profile-js.md')
      },
      'android': {
        'markdown': require('./content/auth/user-profile-android.md')
      },
      'ios': {
        'markdown': require('./content/auth/user-profile-ios.md')
      },
    },
  },
  'cloud-db': {
    'basics': {
      'js': {
        'markdown': require('./content/cloud-db/basics-js.md')
      },
      'android': {
        'markdown': require('./content/cloud-db/basics-android.md')
      },
      'ios': {
        'markdown': require('./content/cloud-db/basics-ios.md')
      },
    },
    'queries': {
      'js': {
        'markdown': require('./content/cloud-db/queries-js.md')
      },
      'android': {
        'markdown': require('./content/cloud-db/queries-android.md')
      },
      'ios': {
        'markdown': require('./content/cloud-db/queries-ios.md')
      },
    },
    'data-types': {
      'js': {
        'markdown': require('./content/cloud-db/data-types-js.md')
      },
      'android': {
        'markdown': require('./content/cloud-db/data-types-android.md')
      },
      'ios': {
        'markdown': require('./content/cloud-db/data-types-ios.md')
      },
    },
    'acl': {
      'js': {
        'markdown': require('./content/cloud-db/acl-js.md')
      },
      'android': {
        'markdown': require('./content/cloud-db/acl-android.md')
      },
      'ios': {
        'markdown': require('./content/cloud-db/acl-ios.md')
      },
    },
    'offline-storage': {
      'js': {
        'markdown': require('./content/cloud-db/offline-storage-js.md')
      },
      'android': {
        'markdown': require('./content/cloud-db/offline-storage-android.md')
      },
      'ios': {
        'markdown': require('./content/cloud-db/offline-storage-ios.md')
      },
    },
    'query-subscription': {
      'js': {
        'markdown': require('./content/cloud-db/query-subscription-js.md')
      },
      'android': {
        'markdown': require('./content/cloud-db/query-subscription-android.md')
      },
      'ios': {
        'markdown': require('./content/cloud-db/query-subscription-ios.md')
      },
    },
  },
  'pubsub': {
    'basics': {
      'js': {
        'markdown': require('./content/pubsub/basics-js.md')
      },
      'android': {
        'markdown': require('./content/pubsub/basics-android.md')
      },
      'ios': {
        'markdown': require('./content/pubsub/basics-ios.md')
      },
    },
  },
  'push-notifications': {
    'basics': {
      'js': {
        'markdown': require('./content/push-notifications/basics-js.md')
      },
      'android': {
        'markdown': require('./content/push-notifications/basics-android.md')
      },
      'ios': {
        'markdown': require('./content/push-notifications/basics-ios.md')
      },
    },
  },
  'cloud-code': {
    'authenticating-users': {
      'python': {
        'markdown': require('./content/cloud-code/authenticating-users-python.md'),
      },
    },
    'calling-skygear-api': {
      'python': {
        'markdown': require('./content/cloud-code/calling-skygear-api-python.md'),
      },
    },
    'database-hooks': {
      'python': {
        'markdown': require('./content/cloud-code/database-hooks-python.md'),
      },
    },
    'error-handling': {
      'python': {
        'markdown': require('./content/cloud-code/error-handling-python.md'),
      },
    },
    'http-endpoint': {
      'python': {
        'markdown': require('./content/cloud-code/http-endpoint-python.md'),
      },
    },
    'intro-and-deployment': {
      'python': {
        'markdown': require('./content/cloud-code/intro-and-deployment-python.md'),
      },
    },
    'lambda': {
      'python': {
        'markdown': require('./content/cloud-code/lambda-python.md'),
      },
    },
    'restful-http-endpoint': {
      'python': {
        'markdown': require('./content/cloud-code/restful-http-endpoint-python.md'),
      },
    },
    'scheduled-tasks': {
      'python': {
        'markdown': require('./content/cloud-code/scheduled-tasks-python.md'),
      },
    },
    'static-assets': {
      'python': {
        'markdown': require('./content/cloud-code/static-assets-python.md'),
      },
    },
  },
};

export default guideRoutes;
