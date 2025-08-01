export default function Login() {
  return (
    <div className="login-container">
      <h1>BSPA 7239 - EDU Platform</h1>
      <form>
        <input type="email" placeholder="Correo institucional" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
