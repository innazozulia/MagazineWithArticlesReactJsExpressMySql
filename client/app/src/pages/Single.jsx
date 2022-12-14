import React from "react";
import Edit from "../img/edit.gif";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = React.useState({});

  const location = useLocation();

  const navigate = useNavigate();

  //find id in posts
  const postId = location.pathname.split("/")[2];

  const { currentUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDeletePost = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img
          src={`../upload/${post.img}`}
          alt=""
        />
        <div className="user">
          {post.userImg && (
            <img
              src={post.userImg}
              alt=""
            />
          )}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link
                to={`/write/?edit=2`}
                state={post}>
                <img
                  src={Edit}
                  alt=""
                />
              </Link>

              <img
                src={Delete}
                alt=""
                onClick={handleDeletePost}
              />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
