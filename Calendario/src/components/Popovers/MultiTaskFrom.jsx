import React, { useState } from "react";

export default function MultiTaskForm({ showMultiForm, setShowMultiForm, addTask, days, category }) {
  const [title, setTitle] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const confirm = () => {
    selectedDays.forEach(day => addTask(day, category, title || "Nueva tarea"));
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
