# React Native Portal

[![Base UI](https://img.shields.io/npm/v/@gorhom/portal?style=flat-square)](https://www.npmjs.com/package/@gorhom/portal) [![npm](https://img.shields.io/npm/l/@gorhom/portal?style=flat-square)](https://www.npmjs.com/package/@gorhom/portal) [![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/@gorhom/portal) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://snack.expo.io/@gorhom/portal-example)

A simplified portal implementation for ⭕️ React Native ⭕️.

![React Native Bottom Sheet](./preview.jpg)

---

## Features

- Multi portals handling.
- Allow override functionality.
- Compatible with `React Native Web`.
- Compatible with `Expo`, [check out the project Expo Snack](https://snack.expo.io/@gorhom/portal-example).
- Written in `TypeScript`.

## Installation

```sh
yarn add @gorhom/portal
```

## Usage

```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Portal, PortalHost } from '@gorhom/portal';

const BasicScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Text won't be teleported!
          <Portal>
            <Text style={styles.text}>Text to be teleported</Text>
          </Portal>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  box: {
    padding: 24,
    backgroundColor: '#333',
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    margin: 24,
    backgroundColor: '#eee',
  },
});

export default () => (
  <PortalHost>
    <BasicScreen />
    {/* Text will be teleported to here */}
  </PortalHost>
);
```

## Props

### `name`

Portal key or name to be used internally.

> `required:` NO | `type:` string | `default:` auto generated unique key

### `handleOnMount`

Override internal mounting functionality, this is useful if you want to trigger any action before mounting the portal content.

```ts
type handleOnMount = (mount?: () => void) => void;
```

> `required:` NO | `type:` function | `default:` undefined

### `handleOnUnmount`

Override internal un-mounting functionality, this is useful if you want to trigger any action before un-mounting the portal content.

```ts
type handleOnUnmount = (unmount?: () => void) => void;
```

> `required:` NO | `type:` function | `default:` undefined

### `children`

Portal content.

> `required:` NO | `type:` ReactNode | ReactNode[] | `default:` undefined

## Hooks

### `usePortal`

To access internal mounting and un-mounting functionality of any portal.

> `type:` [PortalMethods](./src/types.ts#L3)

<h2 id="built-with">Built With ❤️</h2>

- [@react-native-community/bob](https://github.com/react-native-community/bob)

## Author

- [Mo Gorhom](https://gorhom.dev/)

## License

[MIT](./LICENSE)

<div align="center">

Liked the library? 😇

<a href="https://www.buymeacoffee.com/gorhom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-red.png" alt="Buy Me A Coffee" height="34" ></a>

</div>

---

<p align="center">
<a href="https://gorhom.dev" target="_blank"><img height="48" alt="Mo Gorhom" src="./gorhom.png"></a>
</p>
