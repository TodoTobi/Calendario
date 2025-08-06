
import { useEffect, useState } from "react";
import { getWeekKey } from "../utils/dateUtils";

export default function useCalendar() {
  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(2025);
  const [currentWeek, setCurrentWeek] = useState(getWeekKey(2025, 7, 1));
  const [tasksByDay, setTasksByDay] = useState(() => {
    const stored = localStorage.getItem("tasksByDay");
    return stored ? JSON.parse(stored) : {};
  });
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
=======
import { useState } from "react";
 codex/verify-migration-logic-in-app.js
import { getWeekKey } from "../utils/dateUtils";
=======
codex/add-dark-mode-class-toggle
import { getWeekKey } from "../utils/dateUtils";
=======
codex/add-category-and-setcategory-in-usecalendar
import { getWeekKey } from "../utils/dateUtils";
=======
 codex/remove-usecontext-and-adjust-props
import { getWeekKey } from "../utils/dateUtils";
=======
codex/move-utility-files-to-src/utils
import { getWeekKey } from "../utils/dateUtils";
=======
import { getWeekKey } from "../components/utils/dateUtils";
 main
main
 main
main
 main

export default function useCalendar() {
  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(2025);
codex/verify-migration-logic-in-app.js
  const [currentWeek, setCurrentWeek] = useState(getWeekKey(2025, 7, 1));
  const [tasksByDay, setTasksByDay] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
=======
codex/add-dark-mode-class-toggle
=======
codex/add-category-and-setcategory-in-usecalendar
  const [currentWeek, setCurrentWeek] = useState(getWeekKey(2025, 7, 1));
  const [tasksByDay, setTasksByDay] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("tarea");
  const [selectedTask, setSelectedTask] = useState(null);
=======
main
  const [currentWeek, setCurrentWeek] = useState(getWeekKey(2025, 7, 1));
  const [tasksByDay, setTasksByDay] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
 codex/add-dark-mode-class-toggle
=======

  const [showMonthPopover, setShowMonthPopover] = useState(false);
  const [showYearPopover, setShowYearPopover] = useState(false);
  const [showTaskMenu, setShowTaskMenu] = useState(false);
  const [showMultiForm, setShowMultiForm] = useState(false);

  const addTask = (day, cat, text = "Nueva tarea") => {
    setTasksByDay(prev => ({
      ...prev,
      [day]: [...(prev[day] || []), { category: cat, text }]
    }));
  };
=======
  const addTask = (day, cat, text = "Nueva tarea") => {
    setTasksByDay(prev => ({
      ...prev,
      [day]: [...(prev[day] || []), { category: cat, text }]
    }));
  };

  const deleteTask = () => {
    if (!selectedTask) return;
    const { day, index } = selectedTask;
    setTasksByDay(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
    setSelectedTask(null);
    setShowTaskMenu(false);
  };

  const duplicateTask = () => {
    if (!selectedTask) return;
    const { day, task } = selectedTask;

    addTask(day, task.category, task.text);
    setShowTaskMenu(false);
  };

  const moveTask = (fromDay, toDay, fromIndex, toIndex) => {
    setTasksByDay(prev => {
      if (fromDay === toDay) {
        const updated = [...(prev[fromDay] || [])];
        const [moved] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, moved);
        return { ...prev, [fromDay]: updated };
      }
      const source = [...(prev[fromDay] || [])];
      const [moved] = source.splice(fromIndex, 1);
      const target = [...(prev[toDay] || [])];
      target.splice(toIndex, 0, moved);
      return { ...prev, [fromDay]: source, [toDay]: target };
    });
  };

  useEffect(() => {
    localStorage.setItem("tasksByDay", JSON.stringify(tasksByDay));
  }, [tasksByDay]);

  return {
    month, setMonth,
    year, setYear,
    currentWeek, setCurrentWeek,
    tasksByDay, addTask, deleteTask, duplicateTask, moveTask,
    darkMode, setDarkMode,
    selectedTask, setSelectedTask,
    showMonthPopover, setShowMonthPopover,
    showYearPopover, setShowYearPopover,
=======
    addTask(day, task.category, task.text);
    setShowTaskMenu(false);
  };

  return {
    month, setMonth,
    year, setYear,
    currentWeek, setCurrentWeek,
    tasksByDay, addTask, deleteTask, duplicateTask,
    darkMode, setDarkMode,
    selectedTask, setSelectedTask,
    showMonthPopover, setShowMonthPopover,
codex/verify-migration-logic-in-app.js
=======
 codex/add-dark-mode-class-toggle
=======
codex/add-category-and-setcategory-in-usecalendar
    showYearPopover, setShowYearPopover,
    showTaskMenu, setShowTaskMenu,
    showMultiForm, setShowMultiForm,
    category, setCategory
  };
}
=======
 main
main
    showYearPopover, setShowYearPopover,

    showTaskMenu, setShowTaskMenu,
    showMultiForm, setShowMultiForm
  };
}
