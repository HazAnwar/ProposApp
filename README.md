# ProposApp

This is a proposal React web app based off my customised [Create React App](https://github.com/HazAnwar/React-Boilerplate) that is wrapped inside of an Android Kotlin container using an Android `WebView`. 

This method extinguishes the need for hosting the web app online as the minified output of React is bundled into the Android application assets and served directly by the Android device's Chrome browser.

Additionally, using a `JavaScript Interface` in Android, we're able to trigger native Android functions from the JavaScript code, such as network calls which will bypass any `CORS` issues demoed by this demo with the Tesla API which you are unable to call directly from a browser due to CORS or the screen wake features controlled by the web app.

The application is a bash-like terminal screen that automatically types in commands and gets commands output in a series of events (written with React/JavaScript) and eventually triggers a remote boot/trunk unlock via the unofficial Tesla API (written in Kotlin with the Volley library) which can be consealing a proposal message (or customised to anything else you may want)!

<img src='./demo.gif' align='right' width='40%' alt='demo'>

## Web

### Getting Started

In order to get started, you must install all the dependencies locally by running

#### `yarn`

### Running Dev Server

You can start the local dev server (with hot reloading) by running

#### `yarn start`

And then you can then view it at [http://localhost:3000](http://localhost:3000) in the browser.

### Output To Android

You can create the production files and move them into the Android assets folder by running

#### `yarn build`

## Android

### Getting Started

Open the `/Android` folder in Android Studio and sync files with Gradle and then you can run the application on a device or on the emulator as well as build and distribute accordingly.
