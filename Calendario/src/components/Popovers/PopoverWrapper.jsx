import React from "react";

codex/verify-migration-logic-in-app.js
=======
codex/add-dark-mode-class-toggle
=======
 codex/add-onclick-handler-for-onclose
export default function PopoverWrapper({ children, visible, onClose, className = "" }) {
  if (!visible) return null;

  return (
    <div onClick={onClose}>
      <div
        className={`popover ${className}`}
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        {children}
      </div>
    </div>
  );
}
=======
main
 main
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
codex/verify-migration-logic-in-app.js
=======
 codex/add-dark-mode-class-toggle
=======
 main
main
 main
