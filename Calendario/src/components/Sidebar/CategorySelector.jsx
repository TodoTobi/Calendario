import React from "react";

export default function CategorySelector({ category, setCategory }) {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="tarea">📝 Tarea</option>
      <option value="trabajo">💼 Trabajo</option>
      <option value="anuncio">📢 Anuncio</option>
      <option value="evento">🎉 Evento</option>
    </select>
  );
}
