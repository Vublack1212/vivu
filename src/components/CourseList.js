import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CourseList({ courses, del }) {
  return (
    <ul className="space-y-2">
      {courses.map((c, i) => (
        <li
          key={i}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span>{c}</span>
          <button
            onClick={() => del(i)}
            className="text-red-500 hover:text-red-700"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CourseList;