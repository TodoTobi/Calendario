import React, { useState } from "react";

export default function YearPopover({ showYearPopover, setShowYearPopover, setYear, year }) {
  const [inputYear, setInputYear] = useState(year);

  if (!showYearPopover) return null;
  return (
    <div className="popover">
      <input
        type="number"
        value={inputYear}
        onChange={(e) => setInputYear(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          setYear(inputYear);
          setShowYearPopover(false);
        }}
      >
        Confirmar
      </button>
    </div>
  );
}
