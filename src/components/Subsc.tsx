"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmailValidationSchema, emailValidationSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

interface IFormInput {
  email: string;
}

export default function Subsc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailValidationSchema>({
    resolver: zodResolver(emailValidationSchema),
    defaultValues: {
      email: "",
    },
  });
  const t = useTranslations("Email");
  const onSubmit = async () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3  mt-4">
      <div className="inputField w-[427px]">
        <input {...register("email")} />
        <label>{t("email")}</label>
      </div>
      <button className="bg-red-600 flex items-center text-white px-4 py-2 rounded-sm cursor-pointer text-[24px] ">
        {t("start")}
        <IoIosArrowForward />
      </button>
    </form>
  );
}
