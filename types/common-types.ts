import { type LucideIcon } from "lucide-react";

export type route = {
  label: string;
  icon: LucideIcon;
  href: string;
  color?: string;
};

export type tool = {
  label: string;
  icon: LucideIcon;
  href: string;
  color: string;
  bgColor: string;
};

export type Dropdown<T> = { lable: string; value: T };
