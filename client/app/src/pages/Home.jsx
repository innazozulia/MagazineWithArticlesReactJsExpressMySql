import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "jkz zdkhd khd",
      desc: "Ptristique senectus. Aenean sed adipiscing diam donec adipiscing tristique risus. Senectus et netus et malesuada fames. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Libero justo laoreet sit amet. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Netus et malesuada fames ac turpis egestas maecenas pharetra. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Quis enim lobortis scelerisque fermentum dui faucibus. Sollicitudin nibh sit amet commodo nulla facilisi. Egestas sed tempus urna et pharetra pharetra massa. Magna fringilla urna porttitor rhoncus.eur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
