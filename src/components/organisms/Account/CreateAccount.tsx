"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Account Created! (demo)");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 p-10 max-w-lg w-full border border-gray-200 mb-10">
        <h1 className="text-3xl text-center font-light mb-2">Create Account</h1>
        <p className="text-center text-sm mb-6">
          Please Register using account detail below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3"
            required
          />
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

          <button
            type="submit"
            className="bg-black text-white py-3 px-6 w-full font-medium"
          >
            Create
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-black underline">
            Return to Store
          </a>
        </div>
      </div>
    </div>
  );
}
