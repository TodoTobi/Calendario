import React from "react";
codex/add-dark-mode-class-toggle
import { monthNames } from "../../utils/dateUtils";
=======
codex/add-category-and-setcategory-in-usecalendar
import { monthNames } from "../../utils/dateUtils";
=======
codex/remove-usecontext-and-adjust-props
import { monthNames } from "../../utils/dateUtils";
=======
codex/move-utility-files-to-src/utils
import { monthNames } from "../../utils/dateUtils";
import { monthNames } from "../utils/dateUtils";
 main
main
main
main

export default function WeekDisplay({ currentWeek }) {
  const [y, m, w] = currentWeek.split("_");
  return (
    <div className="week-display">
      📆 Semana {w} de {monthNames()[m - 1]} {y}
    </div>
  );
}
