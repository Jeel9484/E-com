"use client";
import React from "react";

export type Option<T extends string | number = string> = {
  label: string;
  value: T;
};

type SelectFieldProps<T extends string | number> = {
  id: string;
  label: string;
  value: T;
  onChangeAction: (v: T) => void; // ✅ renamed
  options: Readonly<Option<T>[]>;
  className?: string;
};

export default function SelectField<T extends string | number>({
  id,
  label,
  value,
  onChangeAction,
  options,
  className = "",
}: SelectFieldProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const casted = (typeof options[0]?.value === "number"
      ? (Number(val) as T)
      : (val as T));
    onChangeAction(casted);
  };

  return (
    <label htmlFor={id} className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-black/80">{label}</span>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="h-9 min-w-[140px] rounded-md border bg-white px-3 text-sm outline-none"
      >
        {options.map((opt) => (
          <option key={`${id}-${opt.value}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
