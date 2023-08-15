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

### Backend deploy 

  github clone https://github.com/ivancho2802/fitcotest

  cd fitcotest

  npm i --save

  npm start

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

OTHERS

DOING

DOES

1. ng2-charts
2. @ngx-translate/core, @ngx-translate/http-loader
3. @angular/cdk
4. @angular/http -> @angular/common/http
5. @angular/platform-browser,  @angular/platform-browser-dynamic
6. @angular/forms
7. @angular/router
8. ngx-qrcode2 ->  angularx-qrcode
9. ionicons


**Backend libraries (Server-Side, API, Middleware, etc.):**

DO
- @nestjs/common
- @nestjs/config
- @nestjs/core
- @nestjs/platform-express
- @nestjs/swagger
- @nestjs/terminus
- @nestjs/typeorm
- cors

DOING

DOES

**Testing libraries:**

DO

DOING

DOES

- @testing-library/jest-dom
- @testing-library/user-event


**Build, Transpile, Package and Deploy libraries:**

DO
- @capacitor/android
- @capacitor/app
- @capacitor/core
- @capacitor/haptics
- @capacitor/ios
- @capacitor/keyboard
- @capacitor/status-bar

DOING

DOES

**Data Access and Manipulation libraries:**

DO

DOING

DOES

**Utilities:**

DO

DOING

DOES


**Data Visualization libraries:**

DO
- chart.js
- ng2-charts

DOING

DOES