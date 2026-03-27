import { useState, useEffect } from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    let data = localStorage.getItem("courses");
    if (data) {
      setCourses(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  function addCourse(course) {
    if (editIndex !== null) {
      let newCourses = [...courses];
      newCourses[editIndex] = course;
      setCourses(newCourses);
      setEditIndex(null);
      alert("Cập nhật thành công");
    } else {
      let newCourses = [...courses, course];
      setCourses(newCourses);
      alert("Thêm thành công");
    }
  }

  function deleteCourse(index) {
    let check = window.confirm("Bạn có chắc muốn xóa?");
    if (check) {
      let newCourses = courses.filter((item, i) => i !== index);
      setCourses(newCourses);
    }
  }

  function editCourse(index) {
    setEditIndex(index);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">
        Quản lý Khóa học
      </h1>

      <p className="mb-4">
        Tổng số: <span className="text-blue-600">{courses.length}</span> khóa học
      </p>

      <CourseForm
        addCourse={addCourse}
        editCourse={editIndex !== null ? courses[editIndex] : null}
      />

      <CourseList
        courses={courses}
        deleteCourse={deleteCourse}
        editCourse={editCourse}
      />
    </div>
  );
}

export default Courses;