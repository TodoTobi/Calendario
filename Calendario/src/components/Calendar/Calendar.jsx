import React from "react";
import DayColumn from "./DayColumn";

 codex/add-category-and-setcategory-in-usecalendar
export default function Calendar({
  days, tasksByDay, addTask, selectedTask, setSelectedTask, setShowTaskMenu,
  category
}) {
=======
export default function Calendar({
  days, tasksByDay, addTask, selectedTask, setSelectedTask, setShowTaskMenu
}) {
main
  return (
    <div id="calendar">
      {days.map((day) => (
        <DayColumn
          key={day}
          day={day}
          tasks={tasksByDay[day] || []}
codex/add-category-and-setcategory-in-usecalendar
          onAddTask={() => addTask(day, category)}
=======
          onAddTask={() => addTask(day, "tarea")}
main
          onSelectTask={(task, index) => {
            setSelectedTask({ day, task, index });
            setShowTaskMenu(true);
          }}
        />
      ))}
    </div>
  );
}
