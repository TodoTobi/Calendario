import React from "react";
import DayColumn from "./DayColumn";

codex/verify-migration-logic-in-app.js
export default function Calendar({
  days, tasksByDay, addTask, selectedTask, setSelectedTask, setShowTaskMenu
}) {
=======
codex/add-dark-mode-class-toggle
export default function Calendar({
  days, tasksByDay, addTask, selectedTask, setSelectedTask, setShowTaskMenu
}) {
=======
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
main
main
  return (
    <div id="calendar">
      {days.map((day) => (
        <DayColumn
          key={day}
          day={day}
          tasks={tasksByDay[day] || []}
codex/verify-migration-logic-in-app.js
          onAddTask={() => addTask(day, "tarea")}
=======
codex/add-dark-mode-class-toggle
          onAddTask={() => addTask(day, "tarea")}
=======
codex/add-category-and-setcategory-in-usecalendar
          onAddTask={() => addTask(day, category)}
=======
          onAddTask={() => addTask(day, "tarea")}
main
main
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
