import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Lorem",
      desc: "Lorem skdjgsd sjdgfs kdgsldnf",
      img: "https://images.unsplash.com/photo-1666624481302-3a9920b039b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts yuo make like</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="post">
          <img
            src={post.img}
            alt=""
          />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
