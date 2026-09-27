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
  );
}