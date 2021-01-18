import React, { useMemo } from 'react';
import Showcase from '@gorhom/showcase-template';
import { useNavigation } from '@react-navigation/native';
import { version, description } from '../../../package.json';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const data = [
  {
    name: 'Basic',
    slug: 'Basic',
  },
  {
    name: 'Modal',
    slug: 'Modal',
  },
];

const RootScreen = () => {
  // hooks
  const { navigate } = useNavigation();
  const safeInsets = useSafeAreaInsets();

  // variables
  const author = useMemo(
    () => ({
      username: 'Mo Gorhom',
      url: 'https://gorhom.dev',
    }),
    []
  );

  // callbacks
  const handleOnPress = (slug: string) => navigate(slug);

  // renders
  return (
    <Showcase
      theme="light"
      version={version}
      name="Portal"
      description={description}
      author={author}
      data={data}
      safeInsets={safeInsets}
      handleOnPress={handleOnPress}
    />
  );
};

export default RootScreen;
