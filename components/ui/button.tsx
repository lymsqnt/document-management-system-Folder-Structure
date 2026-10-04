<<<<<<< HEAD
"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
=======
type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
>>>>>>> b976e4829c91332e2ee1ab5a458a12a580c94b84
};

export default function Button({
  children,
<<<<<<< HEAD
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center transition disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
=======
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button type={type} className={`btn ${className}`}>
>>>>>>> b976e4829c91332e2ee1ab5a458a12a580c94b84
      {children}
    </button>
  );
}