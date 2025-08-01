import { useState, useEffect } from "react";

export default function MaterialList() {
  const [materiales, setMateriales] = useState([]);

  useEffect(() => {
    // Simulación: fetch a la API fake (backend/db.json)
    fetch("http://localhost:3001/materiales")
      .then(res => res.json())
      .then(data => setMateriales(data));
  }, []);

  return (
    <div className="material-list">
      <h3>Materiales Subidos</h3>
      <ul>
        {materiales.map((material) => (
          <li key={material.id}>
            <strong>{material.titulo}</strong> - {material.curso} ({material.fecha})
          </li>
        ))}
      </ul>
    </div>
  );
}
