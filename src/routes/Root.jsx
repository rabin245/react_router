import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="app">
      <Header />
      {navigation.state === "loading" ? <div>Loading...</div> : <Outlet />}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Root;
