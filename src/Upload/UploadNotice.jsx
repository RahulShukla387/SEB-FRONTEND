
import { useEffect, useState } from "react";
// import axios from "axios";
import axios from "axios";
import { Typography } from '@mui/material';
import Notice from "../Notice/Notice";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
function UploadNotice() {
   const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  // Fetch current user
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/debug`, { withCredentials: true })
      .then(res => setUser(res.data.user))
      .catch(err => console.error(err));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("noticeTitle", title);

    try {
      const res = await axios.post(`${BACKEND_URL}/api/UploadNotice`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload successful!");
      setFile(null);
      setTitle("");
    } catch (err) {
      alert(err.response?.data?.error || "Upload failed");
      console.error(err);
    }
  };

  if (!user) {
    return (
      <div>
        <a href={`${BACKEND_URL}/auth/google`}>Login with Google</a>
      </div>
    );
  }
  if (user.role !== "admin") {
    //  alert(<h1>Login With Admin Account to upload. </h1>);
    return <p>Access denied. Only admin can upload notices.</p>;

  }
    return ( <>
   
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form
    onSubmit={handleUpload}
    className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
  >
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Admin Upload
    </h2>

    <label className="block text-gray-700 font-semibold mb-2">
      Notice Title
    </label>
    <input
      type="text"
      placeholder="Enter notice title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <label className="block text-gray-700 font-semibold mb-2">
      Upload PDF
    </label>
    <input
      type="file"
      accept="application/pdf"
      onChange={(e) => setFile(e.target.files[0])}
      required
      className="w-full mb-6"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
    >
      Upload Notice
    </button>

    <div className="text-center mt-4">
      <a
         href={`${BACKEND_URL}/logout`}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Logout
      </a>
    </div>
  </form>
</div>

    </> );
}

export default UploadNotice;

