import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default routes;
