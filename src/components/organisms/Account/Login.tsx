"use client";

import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // input event typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // form submit event typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", form);
    alert("Logged In! (demo)");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 p-10 max-w-lg w-full border border-gray-200 mb-10">
        <h1 className="text-3xl text-center font-light mb-2">Login</h1>
        <p className="text-center text-sm mb-6">
          Please login using account detail bellow.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3"
            required
          />

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 font-medium"
            >
              Sign In
            </button>
            <a href="/forgot-password" className="text-sm text-black underline">
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="mt-6 text-left">
          <a href="/create-account" className="text-sm text-black underline">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
