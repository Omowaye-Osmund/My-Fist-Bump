const BlogList = ({blogs, title}) => {
    return ( 
        <div className="bloglist">
               {blogs.map((blog) => (
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by:{blog.author}</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;