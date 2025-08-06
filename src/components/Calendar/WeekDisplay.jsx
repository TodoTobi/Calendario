import React from "react";
codex/rename-multitaskfrom.jsx-to-multitaskform.jsx
import { monthNames } from "../../utils/dateUtils";
=======
import { monthNames } from "../utils/dateUtils";
main

export default function WeekDisplay({ currentWeek }) {
  const [y, m, w] = currentWeek.split("_");
  return (
    <div className="week-display">
      📆 Semana {w} de {monthNames()[m - 1]} {y}
    </div>
  );
}
