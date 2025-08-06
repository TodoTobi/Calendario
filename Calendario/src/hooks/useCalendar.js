import { useState } from "react";
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

export default function useCalendar() {
  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(2025);
codex/add-category-and-setcategory-in-usecalendar
  const [currentWeek, setCurrentWeek] = useState(getWeekKey(2025, 7, 1));
  const [tasksByDay, setTasksByDay] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("tarea");
  const [selectedTask, setSelectedTask] = useState(null);
=======
  const [currentWeek, setCurrentWeek] = useState(getWeekKey(2025, 7, 1));
  const [tasksByDay, setTasksByDay] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
main
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

  return {
    month, setMonth,
    year, setYear,
    currentWeek, setCurrentWeek,
    tasksByDay, addTask, deleteTask, duplicateTask,
    darkMode, setDarkMode,
    selectedTask, setSelectedTask,
    showMonthPopover, setShowMonthPopover,
codex/add-category-and-setcategory-in-usecalendar
    showYearPopover, setShowYearPopover,
    showTaskMenu, setShowTaskMenu,
    showMultiForm, setShowMultiForm,
    category, setCategory
  };
}
=======
    showYearPopover, setShowYearPopover,
    showTaskMenu, setShowTaskMenu,
    showMultiForm, setShowMultiForm
  };
}
main
