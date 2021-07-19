import React from 'react'

function BlogList({blogs, title, handleDelete, handleRestore}) {
    return (
        <div className="content">
            <h1>{title}</h1>
        <div className="total">
          Total number of blogs available <span>{blogs.length}</span>
        </div>
        {blogs.map((blog) => {
          return (
            <>
            <div className="blog-preview" key={blog.id}>
              <div>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
              </div>
              <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
            </>
          );
        })}
          <button onClick={handleRestore} style={{width: '100%'}}>Clear All Blogs</button>
      </div>
    )
}

export default BlogList
