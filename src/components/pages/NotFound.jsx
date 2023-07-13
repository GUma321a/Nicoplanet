import React from 'react';
import { NextSeo } from 'next-seo';
import { Number, Title } from '../atoms';

import number from '../../assets/images/decor/404.png';

function NotFoundPage() {
  const title = 'This page could not be found';
  const description = 'The page you are trying to access does not exist.';

  return (
    <section className="404">
      <div className="container">
        <div className="404__wrapper grid grid-cols-1 md:grid-cols-2">
          <NextSeo title={title} description={description} />
          <Title size="h1" text="THIS PAGE DOESN'T SEEM TO EXIST" />
          <div className="404__img relative flex items-center">
            <Number className="404__img-content" content={number} />
            <span className="bg-[#52C5D5] opacity-50 block w-full h-full rounded-[50%] absolute blur-[136px] top-0 -z-10 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
