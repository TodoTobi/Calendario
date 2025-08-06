import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Calendar from "./components/Calendar/Calendar";
import WeekDisplay from "./components/Calendar/WeekDisplay";
import TaskMenu from "./components/Popovers/TaskMenu";
import MultiTaskForm from "./components/Popovers/MultiTaskForm";
import MonthPopover from "./components/Sidebar/MonthPopover";
import YearPopover from "./components/Sidebar/YearPopover";
import useCalendar from "./hooks/useCalendar";
import { days, monthNames } from "./utils/dateUtils";
import "./styles/style.css";
import "./styles/darkMode.css";

export default function App() {
  const calendar = useCalendar();

  return (
    <div className={`app-container ${calendar.darkMode ? "dark-mode" : ""}`}>
      <Sidebar {...calendar} monthNames={monthNames()} days={days} />
      <main>
        <h1>Mi Calendario Semanal</h1>
        <WeekDisplay currentWeek={calendar.currentWeek} />
        <Calendar {...calendar} days={days} />
      </main>

      {/* Popovers */}
      <MonthPopover {...calendar} monthNames={monthNames()} />
      <YearPopover {...calendar} />
      <TaskMenu {...calendar} />
      <MultiTaskForm {...calendar} days={days} />
    </div>
  );
}
