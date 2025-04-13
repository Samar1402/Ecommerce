import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none">
            Login
          </button>
        </div>

        {/* Sign up link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            {/* Using Link to navigate to Sign Up page */}
            <Link
              to="/signup"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
