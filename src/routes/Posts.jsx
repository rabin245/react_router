import {
  Await,
  Link,
  defer,
  useAsyncError,
  useAsyncValue,
  useLoaderData,
} from "react-router-dom";
import Post from "../components/Post";
import { Suspense } from "react";

const loader = async ({}) => {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        });
    }, 3000);
  });

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json(); // will wait until promise resolves to render the route

  // console.log(data);

  const test2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("this is test data");
    }, 5000);
  });

  const test = new Promise((resolve) =>
    setTimeout(() => resolve("this is test data being awaited"), 1000)
  );

  // if await is used, it is not deferred and the page will not render until the data is loaded
  // defer enables suspense for the un-awaited promises
  return defer({
    data,
    // test: "this is already loaded data using await",
    test: await test,
    test2,
  });
};

const Posts = () => {
  const loaderdata = useLoaderData();

  const skeletons = Array(10).fill(<PostSkeleton />);

  return (
    <div>
      <Suspense fallback={<div>Loading test2 data...</div>}>
        <Await resolve={loaderdata.test2} errorElement={<div>Error</div>}>
          {(data) => <div>{data}</div>}
        </Await>
      </Suspense>
      <div>{loaderdata.test}</div>
      <Suspense fallback={skeletons}>
        <Await resolve={loaderdata.data} errorElement={<PostsError />}>
          <PostsList />
        </Await>
      </Suspense>
    </div>
  );
};

const PostSkeleton = () => {
  return (
    <div className="wrapper">
      <div className="post-skeleton ">
        <div className="title-skeleton"></div>
        <div className="body-skeleton"></div>
      </div>
    </div>
  );
};

const PostsList = () => {
  const posts = useAsyncValue();
  // console.log("using hook", posts);

  return (
    <>
      {posts.map((post, index) => {
        return (
          <Link
            className="postLink"
            to={`/posts/${post.id}`}
            key={index}
            state={post}
          >
            <Post post={post} />
          </Link>
        );
      })}
    </>
  );
};

const PostsError = () => {
  const error = useAsyncError();

  return <div>{error.message}</div>;
};

export default Posts;
export { loader };
