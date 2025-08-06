import React, { useState } from "react";

 codex/add-dark-mode-class-toggle
export default function MultiTaskForm({ showMultiForm, setShowMultiForm, addTask, days }) {
=======
codex/add-category-and-setcategory-in-usecalendar
export default function MultiTaskForm({ showMultiForm, setShowMultiForm, addTask, days, category }) {
=======
export default function MultiTaskForm({ showMultiForm, setShowMultiForm, addTask, days }) {
main
main
  const [title, setTitle] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const confirm = () => {
 codex/add-dark-mode-class-toggle
    selectedDays.forEach(day => addTask(day, "tarea", title || "Nueva tarea"));
=======
codex/add-category-and-setcategory-in-usecalendar
    selectedDays.forEach(day => addTask(day, category, title || "Nueva tarea"));
=======
    selectedDays.forEach(day => addTask(day, "tarea", title || "Nueva tarea"));
main
main
    setShowMultiForm(false);
  };

  if (!showMultiForm) return null;

  return (
    <div className="popover">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nombre tarea" />
      <div id="multiDays">
        {days.map((d) => (
          <div
            key={d}
            className={`day-checkbox ${selectedDays.includes(d) ? "active" : ""}`}
            onClick={() => toggleDay(d)}
          >
            {d.slice(0, 2)}
          </div>
        ))}
      </div>
      <button onClick={confirm}>Aceptar</button>
    </div>
  );
}
