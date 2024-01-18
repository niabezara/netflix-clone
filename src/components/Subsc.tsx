"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmailValidationSchema, emailValidationSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { cn } from "@/utils";

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
  const onSubmit = async () => {
    console.log("click");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3  mt-4 z-40">
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
      <button
        className="bg-red-600 flex items-center text-white px-4 py-2 rounded-sm cursor-pointer text-[24px] hover:bg-red-500"
        type="submit"
      >
        {t("start")}
        <IoIosArrowForward />
      </button>
    </form>
  );
}
