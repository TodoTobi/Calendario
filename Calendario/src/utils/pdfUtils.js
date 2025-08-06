import { jsPDF } from "jspdf";
import { days } from "./dateUtils";

export function exportWeekPdf(weekKey, tasksByDay) {
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text(`Semana ${weekKey}`, 10, 10);
  let y = 20;

  days.forEach(d => {
    doc.setFont(undefined, "bold");
    doc.text(d, 10, y);
    y += 6;
    doc.setFont(undefined, "normal");
    (tasksByDay[d] || []).forEach(task => {
      doc.text(`- ${task.text}`, 12, y);
      y += 6;
    });
    y += 4;
  });

  doc.save(`Semana_${weekKey}.pdf`);
}
