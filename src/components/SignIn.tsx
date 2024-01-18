"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { SigninValidationSchema, signinValidationSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninValidationSchema>({
    resolver: zodResolver(signinValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async () => {};
  return (
    <div className="flex justify-center ">
      <div className="self-center mt-2 bg-black bg-opacity-75 py-16 px-16 lg:max-w-[450px] lg:w-2/5 lg:max0w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="inputField bg-[#333] ">
            <input {...register("email")} />
            <label>email</label>
          </div>
          <div className="inputField bg-[#333] ">
            <input {...register("password")} />
            <label>password</label>
          </div>
          <button className="bg-red-600 py-3 text-white rounded-md cursor-pointer w-full mt-10 hover:bg-red-700 transition">
            Sign In
          </button>
          <p className="text-neutral-500 mt-12">
            New to Netflix?{" "}
            <span className="text-white ml-1 hover:underline cursor-pointer">
              Sign up now.
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
