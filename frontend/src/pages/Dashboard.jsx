import DocenteUpload from "../components/DocenteUpload";
import MaterialList from "../components/MaterialList";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Panel Docente - BSPA 7239</h2>
      <DocenteUpload />
      <MaterialList />
    </div>
  );
}
