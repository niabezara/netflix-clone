"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import { SigninValidationSchema, signinValidationSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { cn } from "@/utils";
import { useState } from "react";

interface IFormInput {
  email: string;
}

export default function Subsc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninValidationSchema>({
    resolver: zodResolver(signinValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const t = useTranslations("Email");
  const onSubmit = async () => {
    console.log("click");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row gap-3 mt-4 z-40 items-center"
    >
      {!email ? (
        <div
          className={cn(
            "inputField md:w-[427px]",
            errors.email && "border-b-2 rounded-[6px] border-amber-600"
          )}
        >
          <input
            type="text"
            id="email"
            placeholder=""
            {...register("email", { required: true })}
            autoComplete="off"
          />
          <label>{t("email")}</label>
        </div>
      ) : (
        <div
          className={cn(
            "inputField md:w-[427px]",
            errors.email && "border-b-2 rounded-[6px] border-amber-600"
          )}
        >
          <input
            type="text"
            id="password"
            placeholder=""
            {...register("password", { required: true })}
            autoComplete="off"
          />
          <label>{t("password")}</label>
        </div>
      )}
      <button
        className="bg-red-600 flex items-center text-white px-4 py-[13px] rounded cursor-pointer text-[24px] hover:bg-red-500"
        type="submit"
      >
        {t("start")}
        <IoIosArrowForward />
      </button>
    </form>
  );
}
