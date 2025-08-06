import React from "react";
import DayColumn from "./DayColumn";

export default function Calendar({
  days, tasksByDay, addTask, selectedTask, setSelectedTask, setShowTaskMenu
}) {
  return (
    <div id="calendar">
      {days.map((day) => (
        <DayColumn
          key={day}
          day={day}
          tasks={tasksByDay[day] || []}
          onAddTask={() => addTask(day, "tarea")}
          onSelectTask={(task, index) => {
            setSelectedTask({ day, task, index });
            setShowTaskMenu(true);
          }}
        />
      ))}
    </div>
  );
}
