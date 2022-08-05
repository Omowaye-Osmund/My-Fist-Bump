import {useState, useEffect }from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Blogs = () => {

const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')



  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  )
}

export default Blogs