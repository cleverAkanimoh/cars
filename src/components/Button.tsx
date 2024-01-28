"use client";

import React from "react";
import { motion as m } from "framer-motion";
import { Spinner } from ".";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  submitting?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className,
  submitting = false,
  disabled = false,
}: ButtonProps) {
  return (
    <m.button
      whileTap={{ scale: 0.6 }}
      onClick={onClick}
      disabled={disabled}
      role="button"
      type="button"
      className={clsx(
        "relative flex items-center gap-2 p-2 rounded-md text-sm transition-all duration-300",
        className,
        {
          "pointer-events-none cursor-not-allowed opacity-50":
            disabled || submitting,
        }
      )}
    >
      {submitting && <Spinner />} {submitting ? "submitting..." : children}
    </m.button>
  );
}
