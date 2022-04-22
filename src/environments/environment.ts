// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // api: 'http://localhost:6500',
    api: 'https://fourthwave-api.herokuapp.com',
    firebaseConfig: {
        apiKey: 'AIzaSyC_K_b7jaF2mFg-6LzNRhcKc8hXTRNFi04',
        authDomain: 'fourth-wave.firebaseapp.com',
        projectId: 'fourth-wave',
        storageBucket: 'fourth-wave.appspot.com',
        messagingSenderId: '185166562691',
        appId: '1:185166562691:web:6507d337747e6bcc90e2b6',
        measurementId: 'G-JX7YT7W1LZ',
    },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
