export const screens = [
  {
    title: '',
    data: [
      {
        name: 'Basic',
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
