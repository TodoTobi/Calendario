import React from "react";

export default function PopoverWrapper({ children, visible, onClose, className = "" }) {
  if (!visible) return null;

  return (
    <div
      className={`popover ${className}`}
      onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
    >
      {children}
    </div>
  );
}
