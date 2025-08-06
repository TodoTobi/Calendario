
import React, { useEffect, useRef } from "react";
import Sortable from "sortablejs";
import Task from "./Task";

export default function DayColumn({
  day,
  tasks,
  onAddTask,
  onSelectTask,
  onMoveTask
}) {
  const listRef = useRef(null);

  useEffect(() => {
    const sortable = new Sortable(listRef.current, {
      group: "tasks",
      animation: 150,
      onEnd: evt => {
        const fromDay = evt.from.dataset.day;
        const toDay = evt.to.dataset.day;
        onMoveTask(fromDay, toDay, evt.oldIndex, evt.newIndex);
      }
    });
    return () => sortable.destroy();
  }, [onMoveTask]);

  return (
    <div className="day-column">
      <div className="day-header">{day}</div>
      <div className="task-list" ref={listRef} data-day={day}>
        {tasks.map((t, i) => (
          <Task key={i} task={t} onClick={() => onSelectTask(t, i)} />
        ))}
      </div>
      <button className="add-task-btn" onClick={onAddTask}>+ Crear</button>
    </div>
  );
}
=======
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
