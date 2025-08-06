import React from "react";
import MiniCalendar from "./MiniCalendar";
import CategorySelector from "./CategorySelector";
import { exportWeekPdf } from "../../utils/pdfUtils";

export default function Sidebar({
  month, setShowMonthPopover,
  year, setShowYearPopover,
  monthNames, days,
  setDarkMode, darkMode,
  currentWeek, tasksByDay,
  setShowMultiForm
}) {
  return (
    <aside className="sidebar">
      <div className="calendar-nav">
        <button onClick={() => setShowMonthPopover(true)} className="nav-btn">
          {monthNames[month - 1]}
        </button>
        <button onClick={() => setShowYearPopover(true)} className="nav-btn">
          {year}
        </button>
      </div>

      <MiniCalendar month={month} year={year} days={days} />

      <button id="toggleDarkMode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Modo claro" : "🌙 Modo noche"}
      </button>

      <h3>✏️ Acciones</h3>
      <CategorySelector />

      <button onClick={() => setShowMultiForm(true)}>➕ Crear en varios días</button>
      <button onClick={() => exportWeekPdf(currentWeek, tasksByDay)}>📄 Exportar PDF</button>
    </aside>
  );
}
