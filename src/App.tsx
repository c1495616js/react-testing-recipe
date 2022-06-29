import React from 'react';
import { Helmet } from 'react-helmet';

import Playground from '@/components/playground';

export default function App(): JSX.Element {
  return (
    <div className="card bordered sm:card-side h-screen px-8">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="React Website" />
        <title>React Testing Recipe</title>
      </Helmet>

      <section>
        <Playground />
      </section>
    </div>
  );
}
