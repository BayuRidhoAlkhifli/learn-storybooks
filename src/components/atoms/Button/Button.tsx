"use client";

import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import "./Button.css";

type Props = {
  children: string;
  type?: "primary" | "default" | "text" | "link";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  icon?: any;
  loading?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  type,
  size,
  icon,
  disabled,
  loading,
  onClick,
}: Props) => {
  const defineTypeButton = () => {
    switch (type) {
      case "primary":
        return "btn-primary";
      case "text":
        return "btn-text";
      case "link":
        return "btn-link";
      case "default":
      default:
        return "btn";
    }
  };

  const defineSizeButton = () => {
    switch (size) {
      case "lg":
        return "btn-lg";
      case "sm":
        return "btn-sm";
      case "md":
      default:
        return "btn-md";
    }
  };

  return (
    <button
      className={`${defineSizeButton()} ${defineTypeButton()}`}
      onClick={onClick}
      {...(disabled || loading ? { disabled: true } : {})}
    >
      {loading ? <CgSpinner className="animate-spin" /> : icon}
      {loading ? "Processing..." : children}
    </button>
  );
};

export default Button;
