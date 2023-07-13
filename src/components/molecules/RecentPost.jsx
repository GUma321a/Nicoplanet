import React from 'react';
import { Title } from '../atoms';
import BlogItem from './BlogItem';

export default function RecentPost({ ...props }) {
  return (
    <div className="recent-post__wrapper">
      <Title size="h2" text="Recent post" className="recent-post__title mb-xl md:mb-[70px]" />
      <BlogItem {...props} />
    </div>
  );
}
