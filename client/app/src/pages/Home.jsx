import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315__480.png",
    },
    {
      id: 2,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315__480.png",
    },
    {
      id: 3,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315__480.png",
    },
    {
      id: 4,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315__480.png",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div
            className="post"
            key={post.id}>
            <div className="img">
              <img
                src={post.img}
                alt=""
              />
            </div>
            <div className="content">
              <Link
                className="link"
                to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
