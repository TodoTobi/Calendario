import React from "react";
import DayColumn from "./DayColumn";

export default function Calendar({
  days, tasksByDay, addTask, selectedTask, setSelectedTask, setShowTaskMenu,
  category
}) {
  return (
    <div id="calendar">
      {days.map((day) => (
        <DayColumn
          key={day}
          day={day}
          tasks={tasksByDay[day] || []}
          onAddTask={() => addTask(day, category)}
          onSelectTask={(task, index) => {
            setSelectedTask({ day, task, index });
            setShowTaskMenu(true);
          }}
        />
      ))}
    </div>
  );
}
