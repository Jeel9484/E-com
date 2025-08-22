"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right" | "center"| "custom";
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = "center",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="cursor-pointer select-none">{trigger}</div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute z-50 mt-2 min-w-[230px] bg-white border border-gray-200
              ${align === "left" ? "left-0" : ""}
              ${align === "right" ? "right-0" : ""}
              ${align === "center" ? "left-1/2 -translate-x-1/2" : ""}
              ${align === "custom" ? "left-20" : ""}
            `}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
