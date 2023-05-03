import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home page
      <div>
        <button
          onClick={() =>
            navigate("/contact", {
              state: {
                message: "state from home",
              },
              replace: true,
            })
          }
        >
          contact me
        </button>
      </div>
    </div>
  );
};

export default Home;
