import React from "react";
import MiniCalendar from "./MiniCalendar";
import CategorySelector from "./CategorySelector";
codex/remove-usecontext-and-adjust-props
import { exportWeekPdf } from "../../utils/pdfUtils";

export default function Sidebar({
  month,
  setShowMonthPopover,
  year,
  setShowYearPopover,
  monthNames,
  days,
  setDarkMode,
  darkMode,
  currentWeek,
  setCurrentWeek,
  tasksByDay,
  setShowMultiForm
}) {
=======
codex/move-utility-files-to-src/utils
import { exportWeekPdf } from "../../utils/pdfUtils";
=======
import { exportWeekPdf } from "../utils/pdfUtils";
main

export default function Sidebar({
  month, setShowMonthPopover,
  year, setShowYearPopover,
  monthNames, days,
  setDarkMode, darkMode,
  currentWeek, tasksByDay,
  setShowMultiForm
}) {
 main
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

codex/remove-usecontext-and-adjust-props
      <MiniCalendar
        month={month}
        year={year}
        days={days}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
=======
      <MiniCalendar month={month} year={year} days={days} />
main

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
