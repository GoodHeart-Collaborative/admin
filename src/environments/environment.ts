// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   url: 'http://womencomdevapi.appskeeper.com/v1/',
  
  // url: 'https://api.goodheart.app/v1/',
  
  tokenKey: 'desknow-admin-token',
  S3_BUCKET: "goodheart-admin",
  mapsApiKey: 'AIzaSyAlInsg850WrPN3xeqgT_muEvPdMJKAxYM',
  config: {
    AWS_ACCESS_KEY: 'AKIA6DQMUBGGZSBCXSFA',
    AWS_SECRET_KEY: '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',
    REGION: 'us-east-1',
    BUCKET_NAME: 'appinventiv-development'
    },
};

// S3 bucket
// S3 Bucket---appinventiv-development
// Url---https://appinventiv-development.s3.amazonaws.com/
// Region---us-east-1
// access key = AKIA6DQMUBGGY6CUWRG4
// secret access key = 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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
