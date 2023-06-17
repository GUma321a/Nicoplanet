import React from 'react';
import pt from 'prop-types';
import BlogItem from '../atoms/BlogItem';

export default function BlogItems({...props}) {
  return (
    <div>
      <BlogItem />
    </div>
  );
}
BlogItem.propTypes = {};
BlogItem.defaultProps = {};
