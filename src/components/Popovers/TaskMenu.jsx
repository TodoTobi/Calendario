import React from "react";

export default function TaskMenu({ showTaskMenu, duplicateTask, deleteTask }) {
  if (!showTaskMenu) return null;
  return (
    <div className="popover">
      <button onClick={duplicateTask}>Duplicar</button>
      <button onClick={deleteTask}>Eliminar</button>
    </div>
  );
}
