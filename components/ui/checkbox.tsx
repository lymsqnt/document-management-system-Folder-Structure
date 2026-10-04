<<<<<<< HEAD
"use client";

import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
  labelClassName?: string;
};

export default function Checkbox({
  label,
  className = "",
  labelClassName = "",
  ...props
}: CheckboxProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input
        {...props}
        type="checkbox"
        className={`checkbox checkbox-sm shrink-0 ${className}`}
      />

      {label && (
        <span className={`text-sm text-slate-600 ${labelClassName}`}>
          {label}
        </span>
      )}
    </label>
=======
type CheckboxProps = {
  id: string;
  label: string;
};

export default function Checkbox({ id, label }: CheckboxProps) {
  return (
    <div className="mt-3 flex min-h-12 items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-3 sm:mt-4 sm:px-4">
      <input
        id={id}
        type="checkbox"
        className="checkbox checkbox-primary checkbox-sm"
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-xs text-gray-700 sm:text-sm"
      >
        {label}
      </label>
    </div>
>>>>>>> b976e4829c91332e2ee1ab5a458a12a580c94b84
  );
}