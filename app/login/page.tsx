"use client";

import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
  const { isLoggedIn } = useAuth();

  // ✅ 실제 백엔드 Google OAuth 엔드포인트 (예시)
  const BACKEND_GOOGLE_AUTH_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/google";

  const handleGoogleLogin = () => {
    // 버튼 클릭 시 백엔드로 이동
    window.location.href = BACKEND_GOOGLE_AUTH_URL;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 text-center">
        <h1 className="text-2xl font-bold mb-6">로그인</h1>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center space-x-2 border border-gray-300 rounded px-6 py-2 hover:bg-gray-50 transition"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">
            Google 계정으로 로그인
          </span>
        </button>
      </div>
    </div>
  );
}
