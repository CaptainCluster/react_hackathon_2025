import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Course from "./pages/Course";
import RateCourse from "./pages/RateCourse/RateCourse";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/rate/:id" element={<RateCourse />}/>
          </Routes>
        </QueryClientProvider>
      </Router>
    </>
  )
}

export default App;
