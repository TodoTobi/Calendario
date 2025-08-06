import React, { useContext } from "react";
import { getWeekKey } from "../utils/dateUtils";
import CalendarContext from "../../hooks/useCalendar";

export default function MiniCalendar({ month, year, days }) {
  const { currentWeek, setCurrentWeek } = useContext(CalendarContext);

  const di = new Date(year, month, 0).getDate();
  const sd = new Date(year, month - 1, 1).getDay();
  const bl = sd ? sd - 1 : 6;

  return (
    <div id="mini-calendar">
      {["L","M","Mi","J","V","S","D"].map((h, i) => (
        <div key={i} className="day-header">{h}</div>
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
