import React from "react";
import Subsc from "./Subsc";
import { useTranslations } from "next-intl";
import Header from "./Header";

export default function Landing() {
  const t = useTranslations("Landing");
  return (
    <>
      <Header />
      <div className="overlay"></div>
      <div className="bg-mainbg bg-no-repeat bg-center bg-cover bg-fixed h-screen flex flex-col gap-4 justify-center items-center text-center text-white ">
        <h1 className="text-[48px] font-extrabold">{t("title")}</h1>
        <p>{t("description")}</p>
        <div className="flex flex-col justify-center items-center">
          <h3>{t("question")}</h3>
          <Subsc />
        </div>
      </div>
    </>
  );
}
