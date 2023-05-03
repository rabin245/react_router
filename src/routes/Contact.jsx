import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      Contact
      <div>{location.state?.message}</div>
    </div>
  );
};

export default Contact;
