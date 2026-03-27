import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/courses");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <button
        onClick={goBack}
        className="mb-6 bg-white px-4 py-2 rounded flex items-center gap-2 shadow-sm"
      >
        <i className="fa fa-arrow-left"></i>
        Quay lại danh sách
      </button>

      <div className="bg-white p-6 rounded-xl shadow-sm text-center mb-10">

        <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          <i className="fa fa-graduation-cap"></i>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Ứng dụng Quản lý Khóa học
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Đây là ứng dụng giúp người dùng quản lý các khóa học một cách đơn giản và tiện lợi.
          Bạn có thể thêm, xóa và xem danh sách khóa học nhanh chóng ngay trên trình duyệt.
          Dữ liệu sẽ được lưu lại nên không bị mất khi tải lại trang.
        </p>

      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Công nghệ sử dụng
      </h2>

      <div className="space-y-4 mb-10">

        <div className="bg-white flex items-center gap-4 border p-4 rounded-xl shadow-sm">
          <div className="bg-gray-100 p-3 rounded-lg">
            <i className="fa fa-cogs text-blue-500"></i>
          </div>
          <p>Sử dụng React để xây dựng giao diện</p>
        </div>

        <div className="bg-white flex items-center gap-4 border p-4 rounded-xl shadow-sm">
          <div className="bg-gray-100 p-3 rounded-lg">
            <i className="fa fa-code text-blue-500"></i>
          </div>
          <p>Dùng useState và useEffect để quản lý dữ liệu</p>
        </div>

        <div className="bg-white flex items-center gap-4 border p-4 rounded-xl shadow-sm">
          <div className="bg-gray-100 p-3 rounded-lg">
            <i className="fa fa-database text-blue-500"></i>
          </div>
          <p>Lưu dữ liệu bằng localStorage</p>
        </div>

        <div className="bg-white flex items-center gap-4 border p-4 rounded-xl shadow-sm">
          <div className="bg-gray-100 p-3 rounded-lg">
            <i className="fa fa-route text-blue-500"></i>
          </div>
          <p>Dùng React Router để chuyển trang</p>
        </div>

      </div>

      <div className="bg-white border p-6 rounded-xl shadow-sm mb-10">

        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="fa fa-check-circle text-blue-500"></i>
          Tính năng chính
        </h2>

        <ul className="space-y-2 text-gray-600">
          <li>• Thêm khóa học mới</li>
          <li>• Xóa khóa học không cần thiết</li>
          <li>• Hiển thị danh sách khóa học</li>
          <li>• Lưu dữ liệu vào trình duyệt</li>
          <li>• Không mất dữ liệu khi reload trang</li>
        </ul>

      </div>

      <div className="text-center">

        <button
          onClick={goBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          <i className="fa fa-arrow-left mr-2"></i>
          Bắt đầu quản lý khóa học
        </button>

      </div>

    </div>
  );
}

export default About;