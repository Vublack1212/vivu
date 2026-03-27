import { useState, useEffect } from "react";

function CourseForm(props) {
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (props.editCourse) {
      setName(props.editCourse.name);
      setTeacher(props.editCourse.teacher);
      setDuration(props.editCourse.duration);
    }
  }, [props.editCourse]);

  function handleSubmit() {
    if (name === "" || teacher === "" || duration === "") {
      alert("Bạn chưa nhập thông tin");
      return;
    }

    props.addCourse({
      name: name,
      teacher: teacher,
      duration: duration,
    });

    setName("");
    setTeacher("");
    setDuration("");
  }

  return (
    <div className="border p-4 rounded mb-6 bg-gray-100">
      <h2 className="mb-4 font-semibold text-lg">
        + Thêm khóa học mới
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <label className="block mb-1 text-sm font-medium">
            Tên khóa học
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="VD: Lập Trình React"
            className="border p-2 w-full rounded bg-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Giảng viên
          </label>
          <input
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            placeholder="VD: Hoàng Văn A"
            className="border p-2 w-full rounded bg-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Thời lượng
          </label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="VD: 50h"
            className="border p-2 w-full rounded bg-white"
          />
        </div>

      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Thêm / Cập nhật
      </button>
    </div>
  );
}

export default CourseForm;