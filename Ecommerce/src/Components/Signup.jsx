import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20">
      {" "}
      {/* Adjusted padding-top */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {" "}
        {/* Reduced padding */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          Sign Up
        </h2>{" "}
        {/* Smaller title */}
        {/* Name Field */}
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter your full name"
          />
        </div>
        {/* Email Field */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter your email"
          />
        </div>
        {/* Password Field */}
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter your password"
          />
        </div>
        {/* Confirm Password Field */}
        <div className="mb-5">
          <label
            htmlFor="confirm-password"
            className="block text-lg font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Confirm your password"
          />
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none">
            Sign Up
          </button>
        </div>
        {/* Login link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
