codex/add-dark-mode-class-toggle
import React, { useState } from "react";

export default function CategorySelector() {
  const [category, setCategory] = useState("tarea");

  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="tarea">📝 Tarea</option>
      <option value="trabajo">💼 Trabajo</option>
      <option value="anuncio">📢 Anuncio</option>
      <option value="evento">🎉 Evento</option>
    </select>
  );
}
=======
codex/add-category-and-setcategory-in-usecalendar
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
=======
import React, { useState } from "react";

export default function CategorySelector() {
  const [category, setCategory] = useState("tarea");

  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="tarea">📝 Tarea</option>
      <option value="trabajo">💼 Trabajo</option>
      <option value="anuncio">📢 Anuncio</option>
      <option value="evento">🎉 Evento</option>
    </select>
  );
}
main
main
