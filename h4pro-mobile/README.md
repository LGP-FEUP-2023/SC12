# H4PRO Mobile

This project aims to develop the mobile application compatible with iOS and android devices for the H4PRO product.

The development will be done with React Native using the Expo CLI tool.

## Environment Setup

Have Node.js installed

To install Expo CLI run: ` npm i -g expo-cli`

Recommended extensions for vscode (optional):

- React Native Tools
- React-Native Snippets
- Prettier

## Running the project

To start the project run on the terminal: `npm start` which will start Expo CLI's command line GUI

To run the code on a virtual Android device:

1. Install Android studio and required SDKs
1. Create Virtual Device via AVD manager
1. Run the Virtual Device
1. With the project already starte and the Expo GUI running follow the instructions on the terminal for running in an android application

## Useful resources

[Video](https://youtu.be/0-S5a0eXPoc) of a intro course to React-native including running, debugging and coding

How to setup and [android emulator](https://docs.expo.dev/workflow/android-studio-emulator/) to use with Expo CLI

## Important Remarks

The Expo Client, eventhought it is a reliable tool, the building process is very volatile, the next step for the project would be migrating it to native react-native code, which would allow for more control over the building process and the app itself.