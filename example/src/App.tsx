import React, { useMemo } from 'react';
import { ShowcaseApp } from '@gorhom/showcase-template';
import { PortalProvider, enableLogging } from '@gorhom/portal';
import { screens } from './screens';
import { version, description } from '../../package.json';

enableLogging();

const App = () => {
  // variables
  const author = useMemo(
    () => ({
      username: 'Mo Gorhom',
      url: 'https://gorhom.dev',
    }),
    []
  );
  return (
    <PortalProvider>
      <ShowcaseApp
        name="Portal"
        description={description}
        version={version}
        author={author}
        data={screens}
      />
    </PortalProvider>
  );
};

export default App;
