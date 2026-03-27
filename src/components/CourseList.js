function CourseList(props) {
  if (props.courses.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        <i className="fa fa-book text-4xl mb-2"></i>
        <p className="text-lg">Chưa có khóa học nào</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Danh sách khóa học
      </h2>

      <input
        placeholder="Tìm kiếm..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => {
          let value = e.target.value.toLowerCase();
          let list = document.querySelectorAll(".course-item");

          list.forEach((el) => {
            if (el.innerText.toLowerCase().includes(value)) {
              el.style.display = "flex";
            } else {
              el.style.display = "none";
            }
          });
        }}
      />

      <div className="space-y-3">
        {props.courses.map((c, i) => (
          <div
            key={i}
            className="course-item border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3>
                <i className="fa fa-book mr-2"></i>
                {c.name}
              </h3>

              <p>
                <i className="fa fa-user mr-1"></i>
                {c.teacher}
              </p>

              <p>
                <i className="fa fa-clock mr-1"></i>
                {c.duration}
              </p>
            </div>

            <div>
              <button
                onClick={() => props.editCourse(i)}
                className="text-blue-500 mr-2"
              >
                <i className="fa fa-edit"></i>
              </button>

              <button
                onClick={() => props.deleteCourse(i)}
                className="text-red-500"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;