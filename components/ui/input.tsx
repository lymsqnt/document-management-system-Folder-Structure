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
  );
}