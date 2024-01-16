import { Pathnames } from "next-intl/navigation";

export const locales = ["ka", "en"] as const;

export const pathnames = {
  "/": "/",
  "/projects": "/projects",
  "/about-us": "/about-us",
  "/contact": "/contact",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
