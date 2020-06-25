# React Native - Base App

> Proyecto base para aplicaciones desarrollados con React Native.

## Paquetes incluidos

- [Async Storage](https://github.com/react-native-community/async-storage)
- [React Native MaskedView](https://github.com/react-native-community/react-native-masked-view)
- [React Native NetInfo](https://github.com/react-native-community/react-native-netinfo)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [Lottie React Native](https://github.com/react-native-community/lottie-react-native)
- [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Reanimated](https://github.com/kmagiera/react-native-reanimated)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- [React Native Safe Area View](https://github.com/react-navigation/react-native-safe-area-view)
- [React Native Screens](https://github.com/kmagiera/react-native-screens)
- [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [React Native SVG](https://github.com/react-native-community/react-native-svg)
- [React Redux](https://github.com/reduxjs/react-redux)
- [Redux](https://es.redux.js.org/)
- [Redux Axios Middleware](https://github.com/svrcekmichal/redux-axios-middleware)
- [Redux Persist](https://github.com/rt2zz/redux-persist)

## Herramientas

- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [SVG to React Native Component](https://www.smooth-code.com/open-source/svgr/playground)
- [Yoga Layout](https://yogalayout.com/)
- [Squoosh - Compresor de imágenes](https://squoosh.app/)
- [Generador de icono y splash screen](https://github.com/bamlab/react-native-make)
- [Renombrar proyecto (1º Opción)](https://github.com/junedomingo/react-native-rename)
- [Renombrar proyecto (2º Opción)](https://github.com/mayconmesquita/react-native-rename-next)

## Pasos para renombrar el proyecto:

1. Ejecutar yarn install.
2. Usar una de las herramientas mencionadas arriba.
3. El nombre de la app en IOS se cambia desde xCode
4. El nombre de la app en Android se cambia en el archivo /android/app/src/main/res/values/strings.xml
5. Ejecutar yarn run clean.\*
6. Ejecutar yarn run clean-android.\*
7. Ejecutar yarn run clean-ios.\*

> Si desarrollas en MAC OS puedes ejecutar yarn clean-all y automáticamente se ejecutarán los 3 clean.

## Comandos:

> yarn run < comando >

> npm run < comando >

### Opciones:

- **rn-link:** Enlaza los assets automáticamente (fuentes de texto)
- **apk:** Genera la apk para subirla a Google Play
- **android-key:** Genera una key para debug
- **clean:** Reinstala las dependencias de node (node_modules)
- **clean-android:** Borra la caché en android
- **clean-ios:** Borra la caché en IOS y reinstala los Pod
- **clean-all:** Ejecuta todos los clean anteriores
- **android:** Abre la app en el emulador de android o en tu smartphone si lo tienes conectado
- **ios:** Abre la app en un emulador de IOS (iPhone 8)
- **iosx:** Abre la app en un emulador de IOS (iPhone X)
- **iosxsmax:** Abre la app en un emulador de IOS (iPhone Xs Max)
- **iost:** Abre la app en un emulador de IOS (iPad Pro (12.9-inch) (3rd generation))
