import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };

  fetchData();

  }, []);


  return (
    <div>
      <h1>Fetch Data Effect</h1>
      <h3>First Post Title</h3>
      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <p>Loading...</p>}
    </div>
  );
};

export default FetchData;
