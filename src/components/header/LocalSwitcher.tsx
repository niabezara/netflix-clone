"use client";
import { cn } from "@/utils";
import * as React from "react";
import { Icons } from "../shared/Icons";
import { useRouter, usePathname } from "../../navigation";
import { locales } from "@/config";
import { useLocale } from "next-intl";

interface LocaleSwitcherProps {
  isMenuOpen?: boolean;
}

const LocaleText: React.FC<{ locale: string; isMenuOpen?: boolean }> = ({
  locale,
}) => {
  return <span>{locale === "ka" ? "Georgian" : "English"}</span>;
};

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ isMenuOpen }) => {
  const [isPending, startTransition] = React.useTransition();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onLinkClickitem = (item: "ka" | "en") => {
    startTransition(() => {
      router.replace(pathname, { locale: item });
      setIsDropdownOpen(false);
    });
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div
      className={cn(
        " bg-transparent border-[rgb(94,94,94)] border-[1px] rounded-sm py-1 pl-4 lg:mr-3 h-fit",
        isDropdownOpen && "button"
      )}
    >
      <div className="relative lg:w-[142px]">
        <button
          onClick={toggleDropdown}
          disabled={isPending}
          className="flex gap-4 items-center justify-center text-white "
        >
          <Icons.lang />
          <div className="hidden lg:flex">
            <LocaleText locale={locale} isMenuOpen={isMenuOpen} />
          </div>
          <Icons.arrowDownIcon />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-[-17px] rounded-[4px] w-[160px] h-fit shadow-md bg-white text-black">
            <div>
              {locales.map((item) => (
                <button
                  key={item}
                  onClick={() => onLinkClickitem(item)}
                  className="flex items-center text-black justify-center w-full h-[33px] cursor-pointer md:hover:bg-sky-600 md:hover:text-white"
                >
                  <LocaleText locale={item} isMenuOpen={isMenuOpen} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocaleSwitcher;
