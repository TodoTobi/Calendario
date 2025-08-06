import React from "react";
import Task from "./Task";

export default function DayColumn({ day, tasks, onAddTask, onSelectTask }) {
  return (
    <div className="day-column">
      <div className="day-header">{day}</div>
      <div className="task-list">
        {tasks.map((t, i) => (
          <Task key={i} task={t} onClick={() => onSelectTask(t, i)} />
        ))}
      </div>
      <button className="add-task-btn" onClick={onAddTask}>+ Crear</button>
    </div>
  );
}
