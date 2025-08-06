import React from "react";
import MiniCalendar from "./MiniCalendar";
import CategorySelector from "./CategorySelector";
codex/add-dark-mode-class-toggle
=======
codex/add-category-and-setcategory-in-usecalendar
 main
import { exportWeekPdf } from "../../utils/pdfUtils";

export default function Sidebar({
  month, setShowMonthPopover,
  year, setShowYearPopover,
  monthNames, days,
  setDarkMode, darkMode,
  currentWeek, tasksByDay,
codex/add-dark-mode-class-toggle
  setShowMultiForm
}) {
=======
  setShowMultiForm,
  category, setCategory
}) {
=======
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
main
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

 codex/add-dark-mode-class-toggle
      <MiniCalendar month={month} year={year} days={days} />
=======
codex/add-category-and-setcategory-in-usecalendar
      <MiniCalendar month={month} year={year} days={days} />
=======
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
 main
 main

      <button id="toggleDarkMode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Modo claro" : "🌙 Modo noche"}
      </button>

      <h3>✏️ Acciones</h3>
 codex/add-dark-mode-class-toggle
      <CategorySelector />
=======
codex/add-category-and-setcategory-in-usecalendar
      <CategorySelector category={category} setCategory={setCategory} />
=======
      <CategorySelector />
main
 main

      <button onClick={() => setShowMultiForm(true)}>➕ Crear en varios días</button>
      <button onClick={() => exportWeekPdf(currentWeek, tasksByDay)}>📄 Exportar PDF</button>
    </aside>
  );
}
