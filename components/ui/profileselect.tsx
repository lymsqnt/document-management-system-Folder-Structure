"use client";

type ProfileSelectProps = {
  label: string;
  value: string;
  icon?: string;
  editing: boolean;
  options: string[];
  onChange: (value: string) => void;
};

export default function ProfileSelect({
  label,
  value,
  icon,
  editing,
  options,
  onChange,
}: ProfileSelectProps) {
  return (
    <label className="block min-w-0">
      <span className="mb-1 block px-1 text-xs font-medium text-slate-800">
        {label}
      </span>

      <span className="flex h-9 w-full items-center gap-2 rounded-md border border-slate-300 bg-white px-2">
        {icon && <span className="shrink-0 text-sm">{icon}</span>}

        <select
          value={value}
          disabled={!editing}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-white text-[11px] !text-slate-900 outline-none disabled:opacity-100"
        >
          {value && !options.includes(value) && (
            <option value={value} className="bg-white text-slate-900">
              {value}
            </option>
          )}

          {!value && (
            <option value="" disabled className="bg-white text-slate-500">
              Select {label}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-white text-slate-900"
            >
              {option}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
}