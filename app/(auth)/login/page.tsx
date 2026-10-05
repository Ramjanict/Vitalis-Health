"use client";
import AuthRedirect from "@/components/AuthRedirect";
import { setToken } from "@/store/auth/AuthState";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { z } from "zod";

const DEFAULT_EMAIL = "admin@wellness.com";
const DEFAULT_PASSWORD = "password123";

// 1. Define Zod schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// 2. Type inference from schema
type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: DEFAULT_EMAIL,
      password: DEFAULT_PASSWORD,
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (
        (data.email.toLowerCase() === DEFAULT_EMAIL.toLowerCase() &&
          data.password === DEFAULT_PASSWORD) ||
        (data.email && data.password.length >= 6)
      ) {
        toast.success("Login successful");
        const token = "mock-static-access-token";
        dispatch(setToken(token));
      } else {
        toast.error(
          `Invalid credentials. Please use ${DEFAULT_EMAIL} / ${DEFAULT_PASSWORD}`
        );
      }
    }, 400);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className={`w-full p-2 border rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default function page() {
  return (
    <AuthRedirect>
      <LoginPage />
    </AuthRedirect>
  );
}
