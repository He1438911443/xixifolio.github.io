// src/components/icons/bilibili.js
import React from "react";
import { ReactComponent as BilibiliIcon } from "../../assets/icons/svg/bilibili.svg";

export default function Bilibili({ 
  size = 24, 
  color = "#00a1d6",
  className = "",
  ...props 
}) {
  return (
    <BilibiliIcon
      style={{ 
        width: size,
        height: size,
        fill: color
      }}
      className={`bilibili-icon ${className}`}
      {...props}
    />
  );
}
