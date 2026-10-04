<<<<<<< HEAD

"use client";

import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`h-9 w-full rounded-md border border-gray-400 bg-white px-3 py-1 text-xs text-black outline-none transition placeholder:text-gray-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 disabled:cursor-not-allowed disabled:bg-gray-100 sm:h-10 sm:text-sm ${className}`}
    />
=======
import { Mail } from "lucide-react";

type InputProps = {
  id: string;
  type?: string;
  placeholder?: string;
};

export default function Input({
  id,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <label
      htmlFor={id}
      className="input mt-2 flex h-10 w-full items-center gap-2 rounded-md border border-gray-400 bg-white text-gray-700 sm:h-11 lg:h-12"
    >
      <Mail size={19} strokeWidth={1.5} className="shrink-0 sm:h-5 sm:w-5" />
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="grow bg-transparent text-xs text-black outline-none placeholder:text-gray-400 sm:text-sm"
      />
    </label>
>>>>>>> b976e4829c91332e2ee1ab5a458a12a580c94b84
  );
}