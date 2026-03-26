import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>Giới thiệu</h2>
      <p>Ứng dụng quản lý khóa học ReactJS</p>
      <Link to="/courses">Quay lại</Link>
    </div>
  );
}

export default About;