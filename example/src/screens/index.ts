import { Platform } from 'react-native';

let screens = [
  {
    title: 'Basic',
    data: [
      {
        name: 'Default',
        slug: 'basic',
        getScreen: () => require('./BasicScreen').default,
      },
      {
        name: 'Modal',
        slug: 'modal',
        getScreen: () => require('./ModalScreen').default,
      },
      {
        name: 'Popover',
        slug: 'popover',
        getScreen: () => require('./PopoverScreen').default,
      },
    ],
  },
];

if (Platform.OS !== 'web') {
  screens.push({
    title: 'Advance',
    data: [
      {
        name: 'Native Screens',
        slug: 'native',
        getScreen: () => require('./NativeScreen').default,
      },
    ],
  });
}

export { screens };
