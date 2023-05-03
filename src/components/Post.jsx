import { useLocation } from "react-router-dom";

const Post = ({ post }) => {
  const { state } = useLocation();

  const { title, body } = post ?? state;

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
