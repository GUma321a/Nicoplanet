import React from 'react';

import { blog } from './data';
import BlogItem from '../../molecules/BlogItem';
import { Title } from '../../atoms';

export default function SectionBlogs() {
  return (
    <section className="blogs margin-container">
      <div className="container">
        <Title text="Blog" size="h1" className="blogs__title mb-lg lg:mb-[80px]" />
        <BlogItem content={blog} />
      </div>
    </section>
  );
}
