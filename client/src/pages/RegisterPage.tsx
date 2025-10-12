import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Input from "../ui/Input";
import Button from "../ui/Button";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register data:", data);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md border border-gray-300 rounded-xl overflow-hidden">
          {/* Card Header */}
          <div className="border-b border-gray-300 p-5 bg-gray-50 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Join us and start your journey 🚀
            </p>
          </div>

          {/* Card Body */}
          <div className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register("name", {
                  required: "Name is required",
                })}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                error={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Register
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-indigo-600 font-medium cursor-pointer hover:underline"
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
