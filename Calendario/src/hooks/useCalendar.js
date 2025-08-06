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
    showTaskMenu, setShowTaskMenu,
    showMultiForm, setShowMultiForm
  };
}
