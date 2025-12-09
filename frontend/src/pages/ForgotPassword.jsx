import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/forget-password`, {
        email,
      });

      toast.success("If this email exists, an OTP has been sent");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        <input
          type="email"
          className="w-full border p-3 rounded mb-4"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="bg-blue-600 w-full text-white p-3 rounded hover:bg-blue-700">
          Send OTP
        </button>
      </form>
    </div>
  );
}