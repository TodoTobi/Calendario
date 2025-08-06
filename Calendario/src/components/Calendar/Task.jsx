import React from "react";

export default function Task({ task, onClick }) {
  return (
    <div className={`task ${task.category}`} onClick={onClick}>
      {task.text}
    </div>
  );
}
