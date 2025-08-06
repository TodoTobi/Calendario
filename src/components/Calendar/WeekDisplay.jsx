import React from "react";
import { monthNames } from "../utils/dateUtils";

export default function WeekDisplay({ currentWeek }) {
  const [y, m, w] = currentWeek.split("_");
  return (
    <div className="week-display">
      📆 Semana {w} de {monthNames()[m - 1]} {y}
    </div>
  );
}
