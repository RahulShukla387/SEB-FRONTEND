import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function TokenHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/api/UploadNotice", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return <div>Logging you in...</div>;
}

export default TokenHandler;