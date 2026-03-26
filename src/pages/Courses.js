import { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import CourseList from "../components/CourseList";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("courses");
    if (data) setCourses(JSON.parse(data));
    setOk(true);
  }, []);

  useEffect(() => {
    if (ok) localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses, ok]);

  const add = useCallback(() => {
    if (name === "") return;
    setCourses([...courses, name]);
    setName("");
  }, [name, courses]);

  const del = useCallback(
    (i) => {
      setCourses(courses.filter((_, index) => index !== i));
    },
    [courses]
  );

  const total = useMemo(() => courses.length, [courses]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <Link to="/" className="text-sm text-blue-500">
          ← Trang chủ
        </Link>

        <h2 className="text-2xl font-bold text-center mt-2 mb-4">
          Quản lý khóa học
        </h2>

        <p className="text-center mb-4">
          Tổng số khóa học: <b>{total}</b>
        </p>

        <div className="flex gap-2 mb-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên khóa học"
            className="flex-1 border rounded px-3 py-2"
          />
          <button
            onClick={add}
            className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <CourseList courses={courses} del={del} />
      </div>
    </div>
  );
}

export default Courses;