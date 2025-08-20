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
  onChange: (v: T) => void;
  options: Readonly<Option<T>[]>;
  className?: string;
};

export default function SelectField<T extends string | number>({
  id,
  label,
  value,
  onChange,
  options,
  className = "",
}: SelectFieldProps<T>) {
  return (
    <label htmlFor={id} className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-black/80">{label}</span>
      <select
        id={id}
        value={value as any}
        onChange={(e) => onChange((e.target.value as unknown) as T)}
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
