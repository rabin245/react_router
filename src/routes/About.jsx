import {
  useLoaderData,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const loader = ({ params }) => {
  return params;
};

const About = () => {
  const data = useLoaderData();
  const params = useParams();
  const location = useLocation();
  const [query, setQuery] = useSearchParams();

  console.log("loading something using loaders", data);
  console.log("with useParams", params);
  console.log(location);

  console.log(query.get("key"));

  return <div>About</div>;
};

export default About;
export { loader };
