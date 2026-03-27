import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Courses from "./pages/Courses";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="p-4 border-b flex justify-between">
        <Link to="/courses">
          <h1 className="text-blue-600 font-bold text-xl cursor-pointer">
            <i className="fa fa-graduation-cap mr-2"></i>
            CourseManager
          </h1>
        </Link>

        <div>
          <Link to="/courses" className="mr-3 bg-blue-500 text-white px-3 py-1 rounded">
            Khóa học
          </Link>
          <Link to="/about" className="text-blue-600">
            Giới thiệu
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;