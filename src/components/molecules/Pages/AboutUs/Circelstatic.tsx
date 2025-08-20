"use client";
import React from "react";

type CircleStatProps = {
  titleTop?: string;      // "Good Experience"
  titleMid?: string;      // "In Last"
  value: string | number; // "10"
  valueSuffix?: string;   // "Years"
  className?: string;     // position classes from parent
  bg?: string;            // tailwind color for circle bg
};

export default function CircleStat({
  titleTop = "Good Experience",
  titleMid = "In Last",
  value,
  valueSuffix = "Years",
  className = "",
  bg = "bg-[#E34228]",
}: CircleStatProps) {
  return (
    <div
      className={`relative ${bg} text-white rounded-full w-[300px] h-[300px] flex flex-col items-center justify-center ${className}`}
      aria-label={`${titleTop} ${titleMid} ${value} ${valueSuffix}`}
    >
      <div className="text-center leading-tight">
        <p className="text-[22px]">{titleTop}</p>
        <p className="text-[18px] opacity-90">{titleMid}</p>
      </div>

      {/* Outlined big number */}
      <div className="mt-2">
        <span className="block text-[160px] leading-none font-semibold text-transparent [-webkit-text-stroke:6px_white]">
          {value}
        </span>
      </div>

      <p className="text-[20px] mt-1">{valueSuffix}</p>
    </div>
  );
}
