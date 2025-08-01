export default function DocenteUpload() {
  const [material, setMaterial] = useState({ titulo: "", curso: "", tipo: "pdf" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Material subido:", material); // Simulación
  };

  return (
    <form onSubmit={handleSubmit}>
      <select 
        value={material.curso}
        onChange={(e) => setMaterial({...material, curso: e.target.value})}
      >
        <option value="">Selecciona módulo</option>
        <option value="Módulo 1">Módulo 1</option>
        {/* ...otros 5 módulos */}
      </select>
      <input
        type="text"
        placeholder="Título"
        value={material.titulo}
        onChange={(e) => setMaterial({...material, titulo: e.target.value})}
      />
      <button type="submit">Subir</button>
    </form>
  );
}
