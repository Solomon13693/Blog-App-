import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [pending, setPending] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [clear, setClear] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setPending(false);
        });
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    setTimeout(() => {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      setDeleted(false);
    }, 500);
    setDeleted(true);
    setBlogs(false);
  };

  const handleRestore = () => {
    setTimeout(() => {
      setBlogs([]);
      setClear(false)
    }, 2000);
    setClear(true)
    setBlogs(false);
  }

  return (
    <div className="home">
      {deleted && (
        <h2 style={{ margin: "50px auto", textAlign: "center", color: "red" }}>
          Deleting Blog....
        </h2>
      )}
      {clear && <h3 style={{ margin: "50px auto", textAlign: "center", color: "#f1356d" }}>Clearing all Blogs..........</h3>}
      {pending && (
        <h1
          style={{ margin: "50px auto", textAlign: "center", color: "#f1356d" }}
        >
          Loading Blog data.......
        </h1>
      )}
      {blogs && (
        <BlogList blogs={blogs} title="New Blogs" handleDelete={handleDelete} handleRestore={handleRestore} />
      )}
    </div>
  );
}

export default Home;
