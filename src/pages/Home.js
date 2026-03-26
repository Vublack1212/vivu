import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center w-96">
        <h1 className="text-3xl font-bold mb-6">Quản lý khóa học</h1>
        <Link to="/courses">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700">
            Vào hệ thống
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;