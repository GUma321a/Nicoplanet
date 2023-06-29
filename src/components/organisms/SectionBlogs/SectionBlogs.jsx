import React from 'react';

import { blog } from './data';
import BlogItem from '../../molecules/BlogItem';

export default function SectionBlogs() {
  return (
    <section className="blogs margin-container">
      <div className="container">
        <BlogItem content={blog} />
      </div>
    </section>
  );
}
