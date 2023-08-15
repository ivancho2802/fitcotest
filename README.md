# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Tidiaz Test Fitco at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/tidiaz-test-fitco/blob/main/.github/CONTRIBUTING.md) before submitting an issue.

## React and Vue Versions

We've built versions of this Conference app in React and Vue for developers that would prefer to use one of those framework options:

[https://github.com/ionic-team/ionic-react-conference-app](https://github.com/ionic-team/ionic-react-conference-app)

[https://github.com/ionic-team/ionic-vue-conference-app](https://github.com/ionic-team/ionic-vue-conference-app)

## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/tidiaz-test-fitco.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing

See [CONTRIBUTING.md](https://github.com/ionic-team/tidiaz-test-fitco/blob/main/.github/CONTRIBUTING.md) :tada::+1:


## App Preview

### [Menu](https://github.com/ionic-team/tidiaz-test-fitco/blob/main/src/app/app.component.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Menu](/resources/screenshots/android-menu.png) | ![iOS Menu](/resources/screenshots/ios-menu.png) |


### [Schedule Page](https://github.com/ionic-team/tidiaz-test-fitco/blob/main/src/app/pages/schedule/schedule.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Schedule](/resources/screenshots/android-schedule.png) | ![iOS Schedule](/resources/screenshots/ios-schedule.png) |

### [Speakers Page](https://github.com/ionic-team/tidiaz-test-fitco/blob/main/src/app/pages/speaker-list/speaker-list.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speakers](/resources/screenshots/android-speakers.png) | ![iOS Speakers](/resources/screenshots/ios-speakers.png) |

### [Speaker Detail Page](https://github.com/ionic-team/tidiaz-test-fitco/blob/main/src/app/pages/speaker-detail/speaker-detail.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speaker Detail](/resources/screenshots/android-speaker-detail.png) | ![iOS Speaker Detail](/resources/screenshots/ios-speaker-detail.png) |

### [About Page](https://github.com/ionic-team/tidiaz-test-fitco/blob/main/src/app/pages/about/about.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About](/resources/screenshots/android-about.png) | ![iOS About](/resources/screenshots/ios-about.png) |


## Deploying

### Progressive Web App

1. Run `ionic build --prod`
2. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`


### Goals

DO
**Frontend libraries (UI, UX, State Management, Routing, etc.):**
- @angular/animations

- @ng-select/ng-select
- @emotion/core
- @emotion/styled
- @ng-bootstrap/ng-bootstrap
- @angular/material
- @ngx-translate/core
- @ngx-translate/http-loader
- @stripe/stripe-js
- @toverux/ngx-sweetalert2
- @zoomus/websdk
- angular-cropperjs
- angular2-fullcalendar
- angular2-jwt
- angularfire2
- animate.css
- bootstrap
- bootstrap-icons
- bootstrap-next
- bootstrap-sass
- classnames
- codemirror
- emotion
- ionicons
- jquery
- jquery-slimscroll
- jquery-sparkline
- jquery.sticky
- jvectormap
- lodash
- ng-intercom
- ng-multiselect-dropdown
- ng-pick-datetime
- ng-zorro-antd
- ng2-charts
- ng2-completer
- ng2-select
- ng2-webstorage
- ngx-bootstrap
- ngx-image-compress
- ngx-mask
- ngx-owl-carousel-o
- ngx-pagination
- ngx-qrcode2
- ngx-quill
- ngx-tags-input
- ngx-ui-switch
- ngx-useful-swiper
- nprogress
- peity
- select2
- select2-bootstrap-theme
- slick-carousel
- swiper
- toastr
- uui
- web-vitals

DOING
- @angular/cdk
- @angular/forms
- @angular/http -> @angular/common/http
- @angular/platform-browser
- @angular/platform-browser-dynamic
- @angular/router


DOES

- @angular/common
- @angular/compiler
- @angular/compiler-cli
- @angular/core
- @ionic/angular

- @stripe/react-stripe-js
- @u-wave/react-vimeo
- react
- react-bootstrap
- react-break
- react-codemirror2
- react-device-detect
- react-dom
- react-google-login
- react-hot-toast
- react-icons
- react-infinite-scroll-component
- react-input-mask
- react-lazy-load-image-component
- react-modal-video
- react-player
- react-select
- react-slick
- reactstrap


**Backend libraries (Server-Side, API, Middleware, etc.):**

DO

DOING

DOES


- @godaddy/terminus
- @nestjs/common
- @nestjs/config
- @nestjs/core
- @nestjs/platform-express
- @nestjs/swagger
- @nestjs/terminus
- @nestjs/typeorm
- @sendgrid/mail
- @sentry/node
- async
- axios
- body-parser
- compression
- cookie-parser
- cors
- cron
- dotenv
- express
- express-async-handler
- express-fileupload
- express-session
- express-winston
- helmet
- https
- ioredis
- jsonwebtoken
- multer
- mysql
- mysql2
- nodemailer
- nodemailer-sendgrid-transport
- pmx
- request
- request-promise
- sequelize
- sequelize-cli
- serve-favicon
- socket.io
- ts-md5
- typeorm
- uuid
- web3
- zeromq

**Testing libraries:**

DO

DOING

DOES

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event


**Build, Transpile, Package and Deploy libraries:**

DO

DOING

DOES

- @babel/polyfill
- @capacitor/android
- @capacitor/app
- @capacitor/core
- @capacitor/haptics
- @capacitor/ios
- @capacitor/keyboard
- @capacitor/status-bar
- @ionic/pro
- @ionic/storage
- @kushki/js
- @loadable/component
- @mailchimp/mailchimp_marketing
- @sls-next/serverless-component
- babel-plugin-add-module-exports
- babel-polyfill
- babel-register
- card-validator
- cordova-android
- cordova-android-firebase-gradle-release
- cordova-android-play-services-gradle-release
- cordova-browser
- cordova-custom-config
- cordova-ios
- cordova-plugin-add-swift-support
- cordova-plugin-ionic
- cordova-plugin-ionic-webview
- file-loader
- jetifier
- next
- next-compose-plugins
- next-optimized-images
- next-react-svg
- next-videos
- now
- responsive-loader
- sass
- serverless-next.js
- sharp
- start-server-webpack-plugin
- stripe-angular
- stripe-stateful-mock
- sw-toolbox
- webp-loader
**Data Access and Manipulation libraries:**



DO

DOING

DOES


- @hubspot/api-client
- @ionic-native/barcode-scanner
- @ionic-native/camera
- @ionic-native/core
- @ionic-native/device
- @ionic-native/firebase
- @ionic-native/google-analytics
- @ionic-native/local-notifications
- @ionic-native/push
- @ionic-native/splash-screen
- @ionic-native/status-bar
- aws-sdk
- firebase
- firebase-admin
- got
- ibm-cos-sdk
- lodash
- mercadopago
- mixpanel-browser
- moment
- moment-duration-format
- pg
- phonegap-plugin-barcodescanner
- pusher
- quill
- quill-emoji
- quill-image-resize
- quill-image-resize-module
- quill-image-upload
- read-excel-file
- rimraf
- rxjs
- rxjs-compat
- sendgrid
- socket.io-client
- stripe
- stripe-stateful-mock
- xlsx
- xml2js
**Utilities:**


DO

DOING

DOES

- @types/aws-sdk
- @types/google.analytics
- @types/mixpanel-browser
- @types/node
- @types/nodemailer
- @types/stripe
- @types/swiper
- @vimeo/player
- base-64
- bcrypt
- blob-stream
- colors
- crypto
- crypto-js
- cryptr
- debug
- deepmerge
- error-stack-parser
- file-saver
- font-awesome
- fs
- jade
- js-md5
- json2xls
- jwt-simple
- linebreak
- log4js
- md5
- path
- read-excel-file
- readline
- reflect-metadata
- stacktrace-js
- sweetalert
- sweetalert2
- swr
- ts-helpers
- tslib
- tus-js-client
- zone.js
**Data Visualization libraries:**


DO

DOING

DOES


- chart.js
- chartjs-plugin-datalabels
- fullcalendar
- ng2-charts