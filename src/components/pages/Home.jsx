import React from 'react';

import { Button } from '../atoms';

function Home() {
  return (
    <div>
      <p>home page</p>
      <div className="flex gap-2">
        <Button link="/about" size="l">
          Go to about page
        </Button>
        <Button size="l" onClick={() => alert('Hello!')}>
          Hello button
        </Button>
      </div>
    </div>
  );
}

export default Home;
