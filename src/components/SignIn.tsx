"use client";
import React from "react";
import { Shell } from "./shell";
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
    <>
      <div className="overlay"></div>
      <div className="bg-mainbg h-screen items-center text-center flex flex-col justify-center text-white ">
        <div className="text-start px-[68px]  mt-4 bg-black bg-opacity-75 pt-[60px] pb-[40px]">
          <h1>Sign In</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="inputField md:w-[427px]">
              <input {...register("email")} />
              <label>email</label>
            </div>
            <div>
              <input {...register("password")} />
              <label>password</label>
            </div>
            <button className="bg-red-600 flex items-center text-white px-4 py-2 rounded-sm cursor-pointer text-[24px] ">
              start
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
