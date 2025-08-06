import React from "react";

export default function MonthPopover({ showMonthPopover, setShowMonthPopover, setMonth, monthNames }) {
  if (!showMonthPopover) return null;
  return (
    <div className="popover month-grid">
      {monthNames.map((m, i) => (
        <button
          key={i}
          onClick={() => {
            setMonth(i + 1);
            setShowMonthPopover(false);
          }}
        >
          {m.slice(0, 3)}
        </button>
      ))}
    </div>
  );
}
