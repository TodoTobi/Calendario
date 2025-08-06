import React from "react";
import { getWeekKey } from "../../utils/dateUtils";

export default function MiniCalendar({
  month,
  year,
  days,
  currentWeek,
  setCurrentWeek
}) {

  const di = new Date(year, month, 0).getDate();
  const sd = new Date(year, month - 1, 1).getDay();
  const bl = sd ? sd - 1 : 6;

  return (
    <div id="mini-calendar">
      {days.map((d, i) => (
        <div key={i} className="day-header">{d.slice(0, 2)}</div>
      ))}
      {Array.from({ length: bl }).map((_, i) => (
        <div key={`b${i}`} />
      ))}
      {Array.from({ length: di }, (_, i) => {
        const dayNum = i + 1;
        const wk = getWeekKey(year, month, dayNum);
        const active = wk === currentWeek;
        return (
          <div
            key={dayNum}
            className={`day-cell ${active ? "active" : ""}`}
            onClick={() => setCurrentWeek(wk)}
          >
            {dayNum}
          </div>
        );
      })}
    </div>
  );
}
