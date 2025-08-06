codex/add-dark-mode-class-toggle
import React, { useContext } from "react";
import { getWeekKey } from "../../utils/dateUtils";
=======
codex/add-category-and-setcategory-in-usecalendar
import React, { useContext } from "react";
import { getWeekKey } from "../../utils/dateUtils";
=======
codex/remove-usecontext-and-adjust-props
import React from "react";
import { getWeekKey } from "../../utils/dateUtils";

export default function MiniCalendar({
  month,
  year,
  days,
  currentWeek,
  setCurrentWeek
}) {
=======
import React, { useContext } from "react";
codex/move-utility-files-to-src/utils
import { getWeekKey } from "../../utils/dateUtils";
=======
import { getWeekKey } from "../utils/dateUtils";
main
main
main
import CalendarContext from "../../hooks/useCalendar";

export default function MiniCalendar({ month, year, days }) {
  const { currentWeek, setCurrentWeek } = useContext(CalendarContext);
codex/add-dark-mode-class-toggle
=======
codex/add-category-and-setcategory-in-usecalendar
=======
 main
main
main

  const di = new Date(year, month, 0).getDate();
  const sd = new Date(year, month - 1, 1).getDay();
  const bl = sd ? sd - 1 : 6;

  return (
    <div id="mini-calendar">
 codex/add-dark-mode-class-toggle
      {["L","M","Mi","J","V","S","D"].map((h, i) => (
        <div key={i} className="day-header">{h}</div>
      ))}
=======
codex/add-category-and-setcategory-in-usecalendar
      {["L","M","Mi","J","V","S","D"].map((h, i) => (
        <div key={i} className="day-header">{h}</div>
      ))}
=======
codex/remove-usecontext-and-adjust-props
      {days.map((d, i) => (
        <div key={i} className="day-header">{d.slice(0, 2)}</div>
      ))}
=======
      {["L","M","Mi","J","V","S","D"].map((h, i) => (
        <div key={i} className="day-header">{h}</div>
      ))}
main
main
main
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
