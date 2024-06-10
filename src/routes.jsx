import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./page/home"));
const Destination = lazy(() => import("./page/destination"));
const Crew = lazy(() => import("./page/crew"));
const Technology = lazy(() => import("./page/technology"));

const RoutesMain = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesMain;
