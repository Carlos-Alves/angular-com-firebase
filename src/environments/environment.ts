// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDo-E7Y4wpgZq8reTcfPxU6b5yt7QIxZhw',
    authDomain: 'ng-tracker-fitness.firebaseapp.com',
    databaseURL: 'https://ng-tracker-fitness.firebaseio.com',
    projectId: 'ng-tracker-fitness',
    storageBucket: 'ng-tracker-fitness.appspot.com',
    messagingSenderId: '620735741102'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
