import React from 'react';
import { blog, blogs } from './data';
import RecentPost from '../../molecules/RecentPost';
import BlogInfo from '../../molecules/BlogInfo';

export default function SectionBlogInfo() {
  return (
    <section className="blog-inf">
      <div className="container">
        <BlogInfo content={blog} />
        <RecentPost content={blogs} />
      </div>
    </section>
  );
}
