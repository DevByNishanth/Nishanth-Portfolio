import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// Opens every project overview at the top (Home restores its own scroll position)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  </>
);

export default App;